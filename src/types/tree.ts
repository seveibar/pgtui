export type Column = {}

export type View = {
  name: string
  columns: Array<Column>
  query: string
  grants: Array<Grant>
  triggers: {
    [triggerName: string]: Trigger
  }
  owner: string
}

export type Policy = {
  name: string
  query: string
}

export type TableAlteration = {
  query: string
}

export type Grant = {
  query: string
}

export type Trigger = {
  functionName: string
  query: string
}

export type PgFunction = {
  name: string
  isTriggerFunction: boolean
}

export type Table = {
  name: string
  columns: Array<Column>
  query: string
  policies: {
    [policyName: string]: Policy
  }
  triggers: {
    [triggerName: string]: Trigger
  }
  alterations: Array<TableAlteration>
  grants: Array<Grant>
  owner: string
}

export type Schema = {
  tables: {
    [tableName: string]: Table
  }
  views: {
    [viewName: string]: View
  }
  functions: {
    [functionName: string]: PgFunction
  }
  owner: string
}

export type Extension = {
  extensionName: string
  query: string
}

export type Database = {
  schemas: {
    [schemaName: string]: Schema
  }
  extensions: Array<Extension>
}
