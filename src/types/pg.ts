export namespace pg {
  export type Statement =
    | AlterTableStmt
    | AlterSeqStmt
    | CreateTrigStmt
    | ViewStmt
    | AlterOwnerStmt
    | VariableSetStmt
    | CreateStmt
    | CreateFunctionStmt
    | CreateSchemaStmt
    | GrantStmt
    | CreatePolicyStmt
    | CreateSeqStmt
    | CreateExtensionStmt
    | CommentStmt

  export type Expression =
    | ValueObject
    | RoleSpec
    | DefElem
    | Constraint
    | Relation
    | Array<Expression>

  export type ObjectType =
    | "OBJECT_EXTENSION"
    | "OBJECT_SCHEMA"
    | "OBJECT_TABLE"
    | "OBJECT_FUNCTION"

  export type CommentStmt = {
    CommentStmt: {
      objtype: ObjectType
      object: ValueObject
      comment: string
    }
  }

  export type CreateExtensionStmt = {
    CreateExtensionStmt: {
      extname: string
      if_not_exists: boolean
      options: Array<ValueObject>
    }
  }

  export type ValueObject =
    | {
        String: { str: string }
      }
    | { List: { items: Array<ValueObject> } }

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

  export type DefElem = {
    DefElem: {
      defname: "owned_by"
      arg: ValueObject
    }
  }

  export type AlterSeqStmt = {
    AlterSeqStmt: {
      sequence: Relation
      options: Array<DefElem>
    }
  }

  export type AlterTableStmt = {
    AlterTableStmt: {
      relation: Relation
      cmds: Array<Command>
      relkind: ObjectType
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
      objtype: ObjectType
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
      objectType: ObjectType
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
  export type CreateTrigStmt = {
    CreateTrigStmt: {
      trigname: string
      relation: Relation
      funcname: Array<ValueObject>
      row: boolean
      timing: number
      events: number
    }
  }

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
