import execa from "execa"
import pgknexlove from "pgknexlove"

export const loadStructureSQL = async () => {
  const { host, port, user, password, database } =
    pgknexlove.default.getConnectionInfo()

  const res = await execa(
    "pg_dump",
    ["-h", host, "-p", port, "-U", user, database].map((a) => a.toString())
  )

  console.log(res)
}

export default loadStructureSQL
