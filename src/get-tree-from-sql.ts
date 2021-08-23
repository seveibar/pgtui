import { CreateSeqStmt } from "./types/pg"
import { Database, Table } from "./types/tree"
import { pg } from "./types"
import * as pgParser from "pgsql-parser"
import fs from "fs"
import path from "path"

export const getTreeFromSQL = (content: string) => {
  const statements: Array<pg.Statement> = pgParser
    .parse(content)
    .map((s) => s.RawStmt.stmt)

  const db: Database = {
    schemas: {},
    extensions: [],
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
        owner: "",
      }
  }

  for (const stmt of statements) {
    console.log("\n", pgParser.deparse(stmt), stmt)
    if ("CreateStmt" in stmt) {
      const { schemaname, relname } = stmt.CreateStmt.relation
      const table: Table = {
        name: relname,
        columns: stmt.CreateStmt.tableElts
          .filter((a) => "ColumnDef" in a)
          .map((a) => {
            const { colname, typeName } = a.ColumnDef
            const type = typeName.names.map(pgParser.deparse).pop() as string
            return { name: colname, type, query: pgParser.deparse(a) }
          }),
        query: pgParser.deparse(stmt),
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
        query: pgParser.deparse(query),
        owner: "",
      }
      continue
    }

    if ("CreateSeqStmt" in stmt) {
      const { schemaname, relname } = stmt.CreateSeqStmt.sequence
      createSchemaIfNotExists(schemaname)
      unassignedSequences.push(stmt)
      continue
      // console.log(pgParser.deparse(stmt.CreateSeqStmt.options))
      // console.log(stmt.CreateSeqStmt.options)
      // unassignedSequences.push(stmt)
      // continue
      // db.schemas[schemaname].sequences[relname] = {
      //   name: relname,
      //   query: pgParser.deparse(stmt),
      // }
      // continue
    }

    if ("AlterTableStmt" in stmt) {
      const { schemaname, relname } = stmt.AlterTableStmt.relation
      const target =
        db.schemas[schemaname].tables[relname] ||
        db.schemas[schemaname].views[relname] ||
        target.alterations.push({
          query: pgParser.deparse(stmt),
        })
      continue
    }

    if ("GrantStmt" in stmt) {
      const { is_grant, targtype, objtype, objects, grantees } = stmt.GrantStmt
      if (objtype === "OBJECT_SCHEMA") {
        console.log(pgParser.deparse(objects))
        // db.schema[]
      } else if (objtype === "OBJECT_TABLE") {
      }
      continue
      // is_grant: boolean
      // targtype: "ACL_TARGET_OBJECT"
      // objtype: "OBJECT_SCHEMA"
      // objects: Array<ValueObject>
      // grantees: Array<RoleSpec>
    }
  }

  return db
}

export default getTreeFromSQL
