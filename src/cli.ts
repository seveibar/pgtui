#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import path from "path"
import fs from "fs/promises"
import execa from "execa"
import { getTreeFromSQL, treeToDirectory } from "./"

const argv = yargs(hideBin(process.argv))
  .command("dump-to-dir", "Dump database structure into directory", (yargs) =>
    yargs.positional("dir", {
      describe: "Target Directory to dump to (will be deleted/recreated)",
    })
  )
  .showHelpOnFail(true)
  .demandCommand().argv

const commandMap = {
  async "dump-to-dir"(yargs) {
    const [, targetDir] = yargs._
    // const content = (await fs.readFile(targetDir)).toString()
    // await treeToDirectory(getTreeFromSQL(content), targetDir)
  },
}

async function main() {
  const [cmd] = argv._

  if (!commandMap[cmd]) await commandMap[cmd](yargs)
}

console.log(argv)
