#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs/promises"
import { getTreeFromSQL, treeToDirectory, loadStructureSQL } from "."
import treeToTypescriptModels from "tree-to-typescript-models"
import { dirStructureToFs } from "dir-structure-to-fs"

const argv = yargs(hideBin(process.argv))
  .command("dump-to-dir", "Dump database structure into directory", (yargs) =>
    yargs
      .positional("dir", {
        describe: "Target Directory to dump to (will be deleted/recreated)",
      })
      .options({
        header: {
          desc: "Header at top of generated sql files",
          default: "Generated by pgtui",
        },
        sqlFile: {
          desc: "Load SQL File as Schema",
        },
      })
  )
  .command(
    "dump-typescript-models",
    "Dump typescript structure into directory",
    (yargs) =>
      yargs
        .positional("dir", {
          describe: "Target Directory to dump to (will be deleted/recreated)",
        })
        .options({
          header: {
            desc: "Header at top of generated sql files",
            default: "Generated by pgtui",
          },
          sqlFile: {
            desc: "Load SQL File as Schema",
          },
        })
  )
  .options({
    host: { desc: "Postgres Host", alias: "h" },
    password: { desc: "Postgres Password" },
    user: { desc: "Postgres User", alias: "U" },
    port: { desc: "Postgres Port", alias: "p" },
    database: { desc: "Postgres Database", alias: "W" },
  })
  .showHelpOnFail(true)
  .demandCommand().argv

const commandMap = {
  "dump-to-dir": async (argv) => {
    const [, targetDir] = argv._
    let content
    if (argv.sqlFile) {
      content = (await fs.readFile(argv.sqlFile)).toString()
    } else {
      content = await loadStructureSQL(argv)
    }
    await treeToDirectory(getTreeFromSQL(content), targetDir, argv)
  },
  "dump-typescript-models": async (argv) => {
    const [, targetDir] = argv._
    let content
    if (argv.sqlFile) {
      content = (await fs.readFile(argv.sqlFile)).toString()
    } else {
      content = await loadStructureSQL(argv)
    }
    const dirStructure = await treeToTypescriptModels(getTreeFromSQL(content))
    await dirStructureToFs({ dirStructure, outputDir: targetDir })
  },
}

async function main() {
  const [cmd] = (await argv)._

  if (!commandMap[cmd]) throw new Error(`Command not found "${cmd}"`)

  await commandMap[cmd](argv)
}

main().catch((e) => {
  console.log(e.stack)
})