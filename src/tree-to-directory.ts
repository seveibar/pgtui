import { DatabaseTree } from "~/types"
import mkdirp from "mkdirp"
import rmfr from "rmfr"
import fs from "fs/promises"
import path from "path"
import { format as formatSQL } from "pg-formatter"

const section = (title, content) => {
  return `--\n-- ${title}\n--\n\n${content}\n\n\n`
}

const render = (queries: Array<{ query: string }> | { query: string }) => {
  const queriesList = Array.isArray(queries) ? queries : [queries]
  return formatSQL(queriesList.map(({ query }) => query + ";").join("\n\n"))
}

export const treeToDirectoryStructure = (
  db: DatabaseTree
): { [filePath: string]: string } => {
  const d = {}
  d["misc.sql"] =
    section("Extensions", render(db.extensions)) +
    section("Misc", render(db.misc))

  for (const schema of Object.values(db.schemas)) {
    for (const table of Object.values(schema.tables)) {
      d[`${schema.name}/${table.name}/${table.name}.sql`] = render(table)
    }
  }

  return d
}

export const treeToDirectory = async (db: DatabaseTree, outputDir: string) => {
  await rmfr(outputDir)
  await mkdirp(outputDir)
  const dirStructure = treeToDirectoryStructure(db)
  for (const filePath in dirStructure) {
    const fullFilePath = path.resolve(outputDir, filePath)
    await mkdirp(path.dirname(fullFilePath))
    await fs.writeFile(fullFilePath, dirStructure[filePath])
  }
}

export default treeToDirectory
