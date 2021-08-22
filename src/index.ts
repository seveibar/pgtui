const pgParser = require("pgsql-parser")
const fs = require("fs")
const path = require("path")

const content = fs
  .readFileSync(path.resolve(__dirname, "..", "tests", "structure.sql"))
  .toString()
// .replace(/--.*$/gm, "")

const statements = pgParser.parse(content).map((s) => s.RawStmt.stmt)
for (const stmt of statements) {
  console.log("\n//", Object.keys(stmt)[0])
  console.log(JSON.stringify(stmt[Object.keys(stmt)[0]], null, "  "))
}

// for (const line of content.split(";")) {
//   console.log(line)
//   console.log(pgParser.parse(line))
// }
