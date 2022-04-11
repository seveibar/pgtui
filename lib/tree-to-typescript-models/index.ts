/**
 * Converts database into types similar to kanel.js
 *
 * There are a couple different types of files.
 *
 * Each schema has a subdirectory.
 *
 **/

import { DatabaseTree } from "lib/types"
import { Project, StructureKind } from "ts-morph"

export const treeToTypescriptModels = (
  db: DatabaseTree
): { [filePath: string]: string } => {
  const fileTree = {}
  const project = new Project({})

  project.addSourceFilesAtPaths("db/types/**/*ts")
  const indexFile = project.createSourceFile("db/types/index.ts", "")
  indexFile.addImportDeclaration({
    moduleSpecifier: "./knex",
  })

  for (const schemaName of Object.keys(db.schemas)) {
    indexFile.addExportDeclaration({
      moduleSpecifier: `./${schemaName}`,
    })
  }

  console.log(indexFile.getText())

  const knexFile = project.createSourceFile("db/types/knex.ts", "")

  for (const [schemaName, schema] of Object.entries(db.schemas)) {
    console.log({ schema })
  }

  return {
    "db/types/index.ts": "// typescript stuff",
    "db/types/seam/Device.ts": "// typescript stuff",
  }
}

export default treeToTypescriptModels
