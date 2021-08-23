export namespace pg {
  export type Statement =
    | AlterTableStmt
    | CreateTriggerStmt
    | ViewStmt
    | AlterOwnerStmt
    | VariableSetStmt
    | CreateStmt
    | CreateFunctionStmt
    | CreateSchemaStmt
    | GrantStmt
    | CreatePolicyStmt
    | CreateSeqStmt

  export type ValueObject = {
    String: { str: string }
  }

  export type RoleSpec = {
    roletype: "ROLESPEC_CSTRING"
    rolename: string
  }

  export type Relation = {
    schemaname: string
    relname: string
  }

  export type Command = AlterTableCmd

  export type AlterTableCmd = {
    AlterTableCmd: {
      subtype: "AT_EnableRowSecurity"
      behavior: "DROP_RESTRICT"
    }
  }

  export type AlterTableStmt = {
    AlterTableStmt: {
      relation: Relation
      cmds: Array<Command>
      relkind: "OBJECT_TABLE"
    }
  }

  export type Constraint = {
    contype: "CONSTR_NOTNULL"
  }

  export type ColumnDef = {
    ColumnDef: {
      colname: string
      typeName: { names: Array<ValueObject>; typemod: -1 }
      is_local: boolean
      constraints: Array<Constraint>
    }
  }

  export type CreateStmt = {
    CreateStmt: {
      relation: Relation
      tableElts: Array<ColumnDef>
      oncommit: "ONCOMMIT_NOOP"
    }
  }

  export type CreateSeqStmt = {
    CreateSeqStmt: {
      sequence: Relation
      options: Array<ValueObject>
    }
  }

  export type GrantStmt = {
    GrantStmt: {
      is_grant: boolean
      targtype: "ACL_TARGET_OBJECT"
      objtype: "OBJECT_SCHEMA" | "OBJECT_TABLE"
      objects: Array<ValueObject>
      grantees: Array<RoleSpec>
    }
  }
  export type CreateSchemaStmt = { CreateSchemaStmt: { schemaname: string } }
  export type CreateFunctionStmt = {
    CreateFunctionStmt: {
      funcname: Array<ValueObject>
      returnType: { names: Array<ValueObject> }
      options: Array<{
        DefElem: {
          defname: "language" | "as"
          arg: ValueObject
        }
      }>
    }
  }
  export type VariableSetStmt = { VariableSetStmt: {} }
  export type AlterOwnerStmt = {
    AlterOwnerStmt: {
      object: ValueObject
      newowner: RoleSpec
    }
  }
  export type ViewStmt = {
    ViewStmt: {
      view: Relation
      query: Statement
    }
  }
  export type CreateTriggerStmt = { CreateTriggerStmt: {} }

  export type Expression = {}

  export type CreatePolicyStmt = {
    policy_name: string
    table: Relation
    cmd_name: string
    permissive: boolean
    roles: Array<{
      RoleSpec: {
        roletype: "ROLESPEC_CSTRING"
        rolename: string
      }
    }>
    qual: Expression
  }
}
