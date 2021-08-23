import { Database, Table } from "./types/tree"
import { pg } from "./types"
import * as pgParser from "pgsql-parser"
import fs from "fs"
import path from "path"
import deparsePg from "./deparse-pg"

export const getTreeFromSQL = (content: string) => {
  const statements: Array<pg.Statement> = pgParser
    .parse(content)
    .map((s) => s.RawStmt.stmt)

  const db: Database = {
    schemas: {},
    extensions: [],
    misc: [],
  }

  const unassignedSequences = []

  const createSchemaIfNotExists = (schemaname: string) => {
    if (!db.schemas[schemaname])
      db.schemas[schemaname] = {
        name: schemaname,
        tables: {},
        views: {},
        functions: {},
        grants: [],
        _tablelessSequences: {},
        owner: "",
      }
  }

  for (const stmt of statements) {
    try {
      console.log("\n", deparsePg(stmt), stmt)
    } catch (e) {
      console.log("\n", stmt)
    }
    if ("CreateStmt" in stmt) {
      const { schemaname, relname } = stmt.CreateStmt.relation
      const table: Table = {
        name: relname,
        columns: stmt.CreateStmt.tableElts
          .filter((a) => "ColumnDef" in a)
          .map((a) => {
            const { colname, typeName } = a.ColumnDef
            const type = typeName.names.map(deparsePg).pop() as string
            return { name: colname, type, query: deparsePg(a) }
          }),
        query: deparsePg(stmt),
        alterations: [],
        policies: {},
        triggers: {},
        sequences: [],
        grants: [],
        owner: "",
      }
      createSchemaIfNotExists(schemaname)
      db.schemas[schemaname].tables[relname] = table
      continue
    }

    if ("ViewStmt" in stmt) {
      const { view, query } = stmt.ViewStmt
      createSchemaIfNotExists(view.schemaname)
      db.schemas[view.schemaname].views[view.relname] = {
        name: view.relname,
        columns: [],
        grants: [],
        triggers: {},
        alterations: [],
        query: deparsePg(query),
        owner: "",
      }
      continue
    }

    if ("CreateSeqStmt" in stmt) {
      const { schemaname, relname } = stmt.CreateSeqStmt.sequence
      createSchemaIfNotExists(schemaname)
      db.schemas[schemaname]._tablelessSequences[relname] = {
        name: relname,
        alterations: [],
      }
      continue
    }

    if ("AlterTableStmt" in stmt) {
      const { schemaname, relname } = stmt.AlterTableStmt.relation
      const target =
        db.schemas[schemaname].tables[relname] ||
        db.schemas[schemaname].views[relname] ||
        db.schemas[schemaname]._tablelessSequences[relname]

      target.alterations.push({
        query: deparsePg(stmt),
      })
      continue
    }

    if ("GrantStmt" in stmt) {
      const { is_grant, targtype, objtype, objects, grantees } = stmt.GrantStmt
      const targetName = deparsePg(objects)
      if (objtype === "OBJECT_SCHEMA") {
        console.log()
        db.schemas[targetName].grants.push({
          query: deparsePg(stmt),
        })
      } else if (objtype === "OBJECT_TABLE") {
        const [schemaname, tablename] = targetName.split(".")
        db.schemas[schemaname].tables[tablename].grants.push({
          query: deparsePg(stmt),
        })
      } else {
        throw new Error(`Unhandled objtype in GrantStmt: "${objtype}"`)
      }
      continue
    }

    if ("VariableSetStmt" in stmt) {
      db.misc.push(deparsePg(stmt))
      continue
    }

    throw new Error(`Unhandled stmt: "${Object.keys(stmt)[0]}"`)
  }

  return db
}

export default getTreeFromSQL
