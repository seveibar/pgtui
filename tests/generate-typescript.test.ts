import fs from "fs/promises"
import test from "ava"
import pgknexlove from "pgknexlove"
import getTreeFromSQL from "~/get-tree-from-sql"
import loadStructureSQL from "~/load-structure-sql"
import getSQLFromTree from "~/get-sql-from-tree"

test("test that we generate typescript", async (t) => {
  const initialSQL = (await fs.readFile("./tests/structure.sql")).toString()
  const db1 = await pgknexlove.default({ testMode: true })
  await db1.raw(initialSQL)
  const schemaSQL = await loadStructureSQL()
  await db1.destroy()
  const dbTree = getTreeFromSQL(schemaSQL)
  // console.log({ dbTree })
  console.log(dbTree.schemas.public)
})
