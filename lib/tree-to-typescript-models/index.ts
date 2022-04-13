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
import snakeToPascal from "~/snake-to-pascal"
import sqlToTsType from "~/sql-to-ts-type"

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
      namespaceExport: `${schemaName}`,
    })
  }

  const knexFile = project.createSourceFile("db/types/knex.ts", "")

  for (const [schemaName, schema] of Object.entries(db.schemas)) {
    const schemaFile = project.createSourceFile(`db/types/${schemaName}`, "")

    for (const [tableName, tableData] of Object.entries(schema.tables)) {
      const tableFile = project.createSourceFile(
        `db/types/${schemaName}/${tableName}.ts`,
        ""
      )
      const interfaceDeclaration = tableFile.addInterface({
        name: `${snakeToPascal(tableName)}`,
      })
      interfaceDeclaration.setIsExported(true)
      // interfaceDeclaration.setIsDefaultExport(true)

      for (const column of tableData.columns) {
        interfaceDeclaration.addProperty({
          name: column.name,
          type: sqlToTsType(column.type, !column.query.includes("NOT NULL")),
        })
      }
    }
  }

  return {
    "db/types/index.ts": "// typescript stuff",
    "db/types/seam/Device.ts": "// typescript stuff",
  }
}

export default treeToTypescriptModels
