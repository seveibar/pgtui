import fs from "fs"
import path from "path"
import getTreeFromSQL from "./get-tree-from-sql"

const content = fs
  .readFileSync(path.resolve(__dirname, "..", "tests", "structure.sql"))
  .toString()

const db = getTreeFromSQL(content)
console.log(JSON.stringify(db, null, "  "))
// getTreeFromSQL(content)
