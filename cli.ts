#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import path from "path"
import fs from "fs/promises"
import execa from "execa"
import { getTreeFromSQL, treeToDirectory, loadStructureSQL } from "./lib"

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
  .options({
    host: { desc: "Postgres Host" },
    password: { desc: "Postgres Password" },
    user: { desc: "Postgres User" },
    port: { desc: "Postgres Port" },
    database: { desc: "Postgres Database" },
  })
  .showHelpOnFail(true)
  .demandCommand().argv

const commandMap = {
  async "dump-to-dir"(argv) {
    const [, targetDir] = argv._
    let content
    if (argv.sqlFile) {
      content = (await fs.readFile(argv.sqlFile)).toString()
    } else {
      content = await loadStructureSQL(argv)
    }
    await treeToDirectory(getTreeFromSQL(content), targetDir, argv)
  },
}

async function main() {
  const [cmd] = (await argv)._

  if (!commandMap[cmd]) throw new Error(`Command not found "${cmd}"`)

  await commandMap[cmd](yargs)
}

console.log(argv)