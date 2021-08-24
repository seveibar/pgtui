#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"

const argv = yargs(hideBin(process.argv)).command(
  "dump-to-dir",
  "Dump database structure into directory",
  (yargs) =>
    yargs.positional("dir", {
      describe: "Target Directory to dump to (will be deleted/recreated)",
    })
).showHelpOnFail(true).demandCommand().argv

const commandMap = {
  async "dump-to-dir"(yargs) {},
}

async function main() {
  const [cmd] = argv._

  if (!commandMap[cmd)) {
    
  }
}

console.log(argv)
