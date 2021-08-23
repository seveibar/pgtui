import fs from "fs"
import path from "path"
import getTreeFromSQL from "./get-tree-from-sql"
import treeToDirectory from "./tree-to-directory"

const content = fs
  .readFileSync(path.resolve(__dirname, "..", "tests", "structure.sql"))
  .toString()

const dbTree = getTreeFromSQL(content)
// console.log(JSON.stringify(db, null, "  "))
treeToDirectory(dbTree, `/tmp/test-tree`)
// getTreeFromSQL(content)
