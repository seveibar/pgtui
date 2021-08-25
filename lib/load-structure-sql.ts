import execa from "execa"
import pgknexlove from "pgknexlove"

export const loadStructureSQL = async (connectionInfo?: any) => {
  const { host, port, user, password, database } = {
    ...pgknexlove.default.getConnectionInfo(),
    ...connectionInfo,
  } as any

  const result = await execa(
    "pg_dump",
    ["-h", host, "-p", port, "-U", user, "-s", database].map((a) =>
      a.toString()
    )
  )

  return result.stdout
}

export default loadStructureSQL
