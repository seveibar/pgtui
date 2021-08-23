import fs from "fs"
import path from "path"
import getTreeFromSQL from "./get-tree-from-sql"

const content = fs
  .readFileSync(path.resolve(__dirname, "..", "tests", "structure.sql"))
  .toString()

console.log(JSON.stringify(getTreeFromSQL(content), null, "  "))
// getTreeFromSQL(content)
