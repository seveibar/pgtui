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

  function createSchemaIfNotExists(schemaname: string) {
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

  function findSequence(schemaname: string, sequencename: string) {
    const schema = db.schemas[schemaname]
    if (schema._tablelessSequences[sequencename])
      return schema._tablelessSequences[sequencename]
    for (const tableName in schema.tables) {
      const table = schema.tables[tableName]
      const seq = table.sequences.find((s) => s.name === sequencename)
      if (seq) return seq
    }
    throw new Error(`Couldn't find sequence: ${schemaname}.${sequencename}`)
  }

  for (const stmt of statements) {
    console.log("\n", deparsePg(stmt), stmt)

    if ("CreateSchemaStmt" in stmt) {
      createSchemaIfNotExists(stmt.CreateSchemaStmt.schemaname)
      continue
    }

    if ("AlterOwnerStmt" in stmt) {
      const { objectType, object, newowner } = stmt.AlterOwnerStmt
      const targetName = deparsePg(object)
      if (objectType === "OBJECT_SCHEMA") {
        db.schemas[targetName].owner = newowner.rolename
      } else if (objectType === "OBJECT_FUNCTION") {
        const [schemaname, funcname] = targetName.split(".")
        console.log({ schema: schemaname, func: funcname, db })
        db.schemas[schemaname].functions[funcname].owner = newowner.rolename
      } else {
        throw new Error(
          `Unsupported object type in AlterOwnerStmt: ${objectType}`
        )
      }
      continue
    }

    if ("AlterSeqStmt" in stmt) {
      const { sequence, options } = stmt.AlterSeqStmt
      const ownedByDef = options.find((o) => o.DefElem.defname === "owned_by")
      if (!ownedByDef)
        throw new Error(
          "Only ownernership change alter sequences are implemented"
        )
      const newowner =
        "List" in ownedByDef.DefElem.arg
          ? ownedByDef.DefElem.arg.List.items.map(deparsePg).join(".")
          : deparsePg(ownedByDef.DefElem.arg)

      const seq = findSequence(sequence.schemaname, sequence.relname)

      if (seq.owner)
        throw new Error(
          "Sequence owner has been set more than once (not implemented)"
        )

      seq.owner = newowner

      delete db.schemas[sequence.schemaname]._tablelessSequences[
        sequence.relname
      ]

      const [, ownerTableName] = newowner.split(".")

      db.schemas[sequence.schemaname].tables[ownerTableName].sequences.push(seq)

      continue
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

    if ("CreateFunctionStmt" in stmt) {
      const {
        funcname: fullFuncName,
        returnType,
        options,
      } = stmt.CreateFunctionStmt
      const [schemaname, funcname] = deparsePg(fullFuncName)
        // TODO this replace may be due to a pgsql-parser bug, PR to fix it
        .replace("\n\n", ".")
        .split(".")
      createSchemaIfNotExists(schemaname)
      db.schemas[schemaname].functions[funcname] = {
        name: funcname,
        query: deparsePg(stmt),
        owner: "",
      }
      continue
    }

    if ("CreateTrigStmt" in stmt) {
      const {
        relation: { schemaname, relname },
        trigname,
        funcname,
        row,
        timing,
        events,
      } = stmt.CreateTrigStmt

      db.schemas[schemaname].tables[relname].triggers[trigname] = {
        name: trigname,
        functionName: deparsePg(funcname),
        query: deparsePg(stmt),
      }
      continue
    }

    if ("CreatePolicyStmt" in stmt) {
      const { policy_name, table, cmd_name, permissive, roles, qual } =
        stmt.CreatePolicyStmt

      db.schemas[table.schemaname].tables[table.relname].policies[policy_name] =
        {
          name: policy_name,
          query: deparsePg(stmt),
        }

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
        grants: [],
        alterations: [],
        owner: "",
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
        const target =
          db.schemas[schemaname].tables[tablename] ||
          db.schemas[schemaname].views[tablename]
        target.grants.push({
          query: deparsePg(stmt),
        })
      } else if (objtype === "OBJECT_SEQUENCE") {
        const [schemaname, seqname] = targetName.split(".")
        findSequence(schemaname, seqname).grants.push({
          query: deparsePg(stmt),
        })
      } else {
        throw new Error(`Unhandled objtype in GrantStmt: "${objtype}"`)
      }
      continue
    }

    if ("CreateExtensionStmt" in stmt) {
      db.extensions.push({
        query: deparsePg(stmt),
        name: stmt.CreateExtensionStmt.extname,
      })
      continue
    }

    if (
      "VariableSetStmt" in stmt ||
      "SelectStmt" in stmt ||
      "CommentStmt" in stmt
    ) {
      db.misc.push({ query: deparsePg(stmt) })
      continue
    }

    throw new Error(`Unhandled stmt: "${Object.keys(stmt)[0]}"`)
  }

  return db
}

export default getTreeFromSQL
