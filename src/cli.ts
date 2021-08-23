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
).argv

console.log(argv)
