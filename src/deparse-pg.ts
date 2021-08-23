import * as pgParser from "pgsql-parser"

export default (exp: any) => {
  return pgParser.deparse(exp)
}
