export const sqlToTsType = (type: string, canBeNull: boolean): string => {
  let tsType = null
  const typeWithoutArray = type.replace(/\[\]$/, "")
  const isTypeArray = type.endsWith("[]")

  switch (typeWithoutArray) {
    case "text":
    case "uuid":
    case "varchar":
    case "char":
    case "character varying":
      tsType = "string"
      break

    case "int4":
    case "int":
    case "integer":
    case "int2":
    case "smallint":
    case "int8":
    case "bigint":
    case "serial":
    case "bigserial":
    case "numeric":
    case "decimal":
    case "real":
    case "float4":
    case "float8":
      tsType = "number"
      break

    case "json":
    case "jsonb":
      tsType = "any"
      break

    case "timestamptz":
    case "timestamp":
    case "date":
      tsType = "Date"
      break

    case "bool":
    case "boolean":
      tsType = "boolean"
      break

    default:
      tsType = "any"
      break
  }

  if (isTypeArray) {
    tsType += "[]"
  }

  if (tsType === "any") {
    return tsType
  }

  return canBeNull ? `${tsType} | null` : tsType
}

export default sqlToTsType
