/**
 * Converts database into types similar to kanel.js
 *
 * There are a couple different types of files.
 *
 * Each schema has a subdirectory.
 *
 **/

import { DatabaseTree } from "lib/types"
import { Project, ModuleDeclarationKind } from "ts-morph"
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
      namespaceExport: schemaName,
    })
  }

  const knexFile = project.createSourceFile("db/types/knex.ts", "")

  for (const [schemaName, schema] of Object.entries(db.schemas)) {
    project.createSourceFile(`db/types/${schemaName}`, "")
    const schemaIndexFile = project.createSourceFile(
      `db/types/${schemaName}/index.ts`,
      ""
    )

    const modelTypeMapName = "ModelTypeMap"
    const modelTypeMapDeclaration = schemaIndexFile.addInterface({
      name: modelTypeMapName,
    })

    const knexFileImportAlias = snakeToPascal(schemaName) + modelTypeMapName
    const knexFileExportDeclaration = knexFile.insertExportDeclaration(0, {
      moduleSpecifier: `./${schemaName}`, // `db/types/${schemaName}`
    })
    knexFileExportDeclaration.addNamedExport({
      name: modelTypeMapName,
      alias: knexFileImportAlias,
    })

    knexFile.addTypeAlias({
      name: `Prefixed${knexFileImportAlias}`,
      type: `{\n[K in keyof ${knexFileImportAlias} as \`${schemaName}.\${K}\`]: ${knexFileImportAlias}[K]\n}`,
    })

    for (const [tableName, tableData] of Object.entries(schema.tables)) {
      const pascaledTableName = snakeToPascal(tableName)
      const tableFile = project.createSourceFile(
        `db/types/${schemaName}/${pascaledTableName}.ts`,
        ""
      )

      const tableInterfaceDeclaration = tableFile.addInterface({
        name: pascaledTableName,
        isDefaultExport: true,
      })

      const tableInterfaceInitializerDeclaration = tableFile.addInterface({
        name: `${pascaledTableName}Initializer`,
        isExported: true,
      })

      for (const column of tableData.columns) {
        const propertyCanBeNull = !column.query.includes("NOT NULL")
        const propertyHasDefaultValue = column.query.includes("DEFAULT")
        const isPropertyOptional = propertyHasDefaultValue || propertyCanBeNull
        const tsType = sqlToTsType(column.type, propertyCanBeNull)

        tableInterfaceDeclaration.addProperty({
          name: column.name,
          type: tsType,
        })

        tableInterfaceInitializerDeclaration.addProperty({
          name: column.name,
          type: tsType,
          hasQuestionToken: isPropertyOptional,
        })
      }

      const interfaceImportDeclaration = schemaIndexFile.addImportDeclaration({
        moduleSpecifier: `./${pascaledTableName}`,
      })
      interfaceImportDeclaration.addNamedImport({
        name: pascaledTableName,
      })
      modelTypeMapDeclaration.addProperty({
        name: tableName,
        type: pascaledTableName,
      })
      // tableFile.saveSync()
    }
    // schemaFile.saveSync()
    // schemaIndexFile.saveSync()
  }

  // indexFile.saveSync()
  // knexFile.saveSync()

  const moduleDeclaration = knexFile.addModule({
    name: "knex/types/tables",
    hasDeclareKeyword: true,
    declarationKind: ModuleDeclarationKind.Module,
  })

  // moduleDeclaration.addInterface({
  //   name: "Tables",
  //   extends: ["ModelTypeMap"],
  // })

  console.log("🚀 ~ file: index.ts ~ line 111 ~ knexFile\n", knexFile.getText())

  return {
    "db/types/index.ts": "// typescript stuff",
    "db/types/seam/Device.ts": "// typescript stuff",
  }
}

export default treeToTypescriptModels
