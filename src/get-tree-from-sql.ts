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

  for (const stmt of statements) {
    if ("CreateStmt" in stmt) {
      const { schemaname, relname } = stmt.CreateStmt.relation
      const table: Table = {
        name: relname,
        columns: stmt.CreateStmt.tableElts.map((a) => {
          if ("ColumnDef" in a) {
            const { colname, typeName } = a.ColumnDef
            const type = typeName.names.map(pgParser.deparse).pop()
            return { name: colname, type, query: pgParser.deparse(a) }
          }
        }),
        query: pgParser.deparse(stmt),
        alterations: [],
      }
      if (!db.schemas[schemaname])
        db.schemas[schemaname] = {
          name: schemaname,
          tables: {},
          views: {},
          functions: {},
          owner: "",
        }

      db.schemas[schemaname].tables[relname] = table
    }
  }

  console.log(JSON.stringify(db, null, "  "))
}

export default getTreeFromSQL
