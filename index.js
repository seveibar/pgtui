const pgParser = require("pgsql-parser")
const fs = require("fs")
const path = require("path")

const content = fs
  .readFileSync(path.resolve(__dirname, "tests", "structure.sql"))
  .toString()
// .replace(/--.*$/gm, "")

console.log(pgParser.parse(content)[11])

// for (const line of content.split(";")) {
//   console.log(line)
//   console.log(pgParser.parse(line))
// }
