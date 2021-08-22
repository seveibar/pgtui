export type View = {}

export type Table = {}

export type Schema = {
  tables: {
    [tableName: string]: Table
  }
  views: {
    [viewName: string]: View
  }
}

export type Database = {
  schemas: {
    [schemaName: string]: Schema
  }
}
