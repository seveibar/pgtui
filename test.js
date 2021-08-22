
// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "statement_timeout",
  "args": [
    {
      "A_Const": {
        "val": {
          "Integer": {
            "ival": 0
          }
        },
        "location": 157
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "lock_timeout",
  "args": [
    {
      "A_Const": {
        "val": {
          "Integer": {
            "ival": 0
          }
        },
        "location": 179
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "idle_in_transaction_session_timeout",
  "args": [
    {
      "A_Const": {
        "val": {
          "Integer": {
            "ival": 0
          }
        },
        "location": 224
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "client_encoding",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "UTF8"
          }
        },
        "location": 249
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "standard_conforming_strings",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "on"
          }
        },
        "location": 291
      }
    }
  ]
}

// SelectStmt
{
  "targetList": [
    {
      "ResTarget": {
        "val": {
          "FuncCall": {
            "funcname": [
              {
                "String": {
                  "str": "pg_catalog"
                }
              },
              {
                "String": {
                  "str": "set_config"
                }
              }
            ],
            "args": [
              {
                "A_Const": {
                  "val": {
                    "String": {
                      "str": "search_path"
                    }
                  },
                  "location": 324
                }
              },
              {
                "A_Const": {
                  "val": {
                    "String": {
                      "str": ""
                    }
                  },
                  "location": 339
                }
              },
              {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "f"
                        }
                      },
                      "location": 343
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "pg_catalog"
                        }
                      },
                      {
                        "String": {
                          "str": "bool"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": -1
                  },
                  "location": -1
                }
              }
            ],
            "location": 302
          }
        },
        "location": 302
      }
    }
  ],
  "limitOption": "LIMIT_OPTION_DEFAULT",
  "op": "SETOP_NONE"
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "check_function_bodies",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "false"
          }
        },
        "location": 379
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "xmloption",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "content"
          }
        },
        "location": 402
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "client_min_messages",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "warning"
          }
        },
        "location": 437
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "row_security",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "off"
          }
        },
        "location": 465
      }
    }
  ]
}

// CreateSchemaStmt
{
  "schemaname": "api"
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_SCHEMA",
  "object": {
    "String": {
      "str": "api"
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "api_user",
    "location": 580
  }
}

// CreateSchemaStmt
{
  "schemaname": "super_api"
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_SCHEMA",
  "object": {
    "String": {
      "str": "super_api"
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 718
  }
}

// CreateExtensionStmt
{
  "extname": "pgcrypto",
  "if_not_exists": true,
  "options": [
    {
      "DefElem": {
        "defname": "schema",
        "arg": {
          "String": {
            "str": "public"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 837
      }
    }
  ]
}

// CommentStmt
{
  "objtype": "OBJECT_EXTENSION",
  "object": {
    "String": {
      "str": "pgcrypto"
    }
  },
  "comment": "cryptographic functions"
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "auth_account_id"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "uuid"
        }
      }
    ],
    "typemod": -1,
    "location": 1118
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 1127
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    DECLARE account_id uuid;\n    BEGIN\n      account_id := (\n        SELECT account_api_key.account_id\n          FROM super_api.account_api_key\n          WHERE key_string=current_setting('request.header.apikey', 't')\n      );\n      RETURN account_id;\n    END\n  "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 1148
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "auth_account_id"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 1470
  }
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "change_last_modified"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "trigger"
        }
      }
    ],
    "typemod": -1,
    "location": 1623
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 1635
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    BEGIN\n      NEW.last_modified_at := current_timestamp;\n      RETURN NEW;\n    END\n    "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 1656
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "change_last_modified"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 1811
  }
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "create_new_account_api_key"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "trigger"
        }
      }
    ],
    "typemod": -1,
    "location": 1976
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 1988
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    BEGIN\n      INSERT INTO account_api_key (account_id, purpose) VALUES (NEW.account_id, 'Default');\n      RETURN NULL;\n    END\n    "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 2009
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "create_new_account_api_key"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 2214
  }
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "meter_limit_checker"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "trigger"
        }
      }
    ],
    "typemod": -1,
    "location": 2365
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 2377
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    BEGIN\n      IF (\n        SELECT COUNT(*) FROM meter WHERE meter.account_id = NEW.account_id\n      ) >= 1000 THEN\n        RAISE EXCEPTION 'You can only have 1,000 meters!';\n      END IF;\n      RETURN NEW;\n    END\n    "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 2398
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "meter_limit_checker"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 2683
  }
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "new_account"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "trigger"
        }
      }
    ],
    "typemod": -1,
    "location": 2818
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 2830
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    BEGIN\n      IF NEW.account_name IS NULL THEN\n        NEW.account_name := 'user_' || NEW.account_num;\n      END IF;\n      RETURN NEW;\n    END\n    "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 2851
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "new_account"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 3057
  }
}

// CreateFunctionStmt
{
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "new_tree"
      }
    }
  ],
  "returnType": {
    "names": [
      {
        "String": {
          "str": "trigger"
        }
      }
    ],
    "typemod": -1,
    "location": 3186
  },
  "options": [
    {
      "DefElem": {
        "defname": "language",
        "arg": {
          "String": {
            "str": "plpgsql"
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 3198
      }
    },
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "\n    BEGIN\n      IF NEW.tree_name IS NULL THEN\n        NEW.tree_name := 'Tree ' || NEW.tree_num;\n      END IF;\n      IF NEW.tree_key IS NULL THEN\n        NEW.tree_key := 'tree_' || NEW.tree_num;\n      END IF;\n      IF NEW.tree_def IS NULL THEN\n        NEW.tree_def := '{\"New Tree\":{\"name\":\"New Tree\",\"description\": \"What is the first thing you will unlock?\"}}';\n      END IF;\n      RETURN NEW;\n    END\n    "
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 3219
      }
    }
  ]
}

// AlterOwnerStmt
{
  "objectType": "OBJECT_FUNCTION",
  "object": {
    "ObjectWithArgs": {
      "objname": [
        {
          "String": {
            "str": "public"
          }
        },
        {
          "String": {
            "str": "new_tree"
          }
        }
      ]
    }
  },
  "newowner": {
    "roletype": "ROLESPEC_CSTRING",
    "rolename": "postgres",
    "location": 3678
  }
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "default_tablespace",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": ""
          }
        },
        "location": 3714
      }
    }
  ]
}

// VariableSetStmt
{
  "kind": "VAR_SET_VALUE",
  "name": "default_table_access_method",
  "args": [
    {
      "A_Const": {
        "val": {
          "String": {
            "str": "heap"
          }
        },
        "location": 3753
      }
    }
  ]
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 3843
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 3875
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 3880,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 3888
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 3906
            }
          }
        ],
        "location": 3864
      }
    },
    {
      "ColumnDef": {
        "colname": "account_num",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "int4"
              }
            }
          ],
          "typemod": -1,
          "location": 3932
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 3940
            }
          }
        ],
        "location": 3920
      }
    },
    {
      "ColumnDef": {
        "colname": "account_name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 3967
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 3972
            }
          }
        ],
        "location": 3954
      }
    },
    {
      "ColumnDef": {
        "colname": "email",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 3992
        },
        "is_local": true,
        "location": 3986
      }
    },
    {
      "ColumnDef": {
        "colname": "auth0_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 4011
        },
        "is_local": true,
        "location": 4002
      }
    },
    {
      "ColumnDef": {
        "colname": "last_active_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 4036
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4061,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 4069
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4087
            }
          }
        ],
        "location": 4021
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 4112
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4137,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 4145
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4163
            }
          }
        ],
        "location": 4101
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 4189
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 4213
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 4302
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 4325
              }
            },
            "location": 4325
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_num"
                    }
                  }
                ],
                "location": 4349
              }
            },
            "location": 4349
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_name"
                    }
                  }
                ],
                "location": 4374
              }
            },
            "location": 4374
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "email"
                    }
                  }
                ],
                "location": 4400
              }
            },
            "location": 4400
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "auth0_id"
                    }
                  }
                ],
                "location": 4419
              }
            },
            "location": 4419
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "last_active_at"
                    }
                  }
                ],
                "location": 4441
              }
            },
            "location": 4441
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 4469
              }
            },
            "location": 4469
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account",
            "inh": true,
            "relpersistence": "p",
            "location": 4496
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 4526
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 4547
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 4649
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "account_api_key_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 4697
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4702,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 4710
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4728
            }
          }
        ],
        "location": 4678
      }
    },
    {
      "ColumnDef": {
        "colname": "account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 4753
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4758
            }
          }
        ],
        "location": 4742
      }
    },
    {
      "ColumnDef": {
        "colname": "key_string",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 4783
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4788,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "md5"
                      }
                    }
                  ],
                  "args": [
                    {
                      "TypeCast": {
                        "arg": {
                          "FuncCall": {
                            "funcname": [
                              {
                                "String": {
                                  "str": "random"
                                }
                              }
                            ],
                            "location": 4801
                          }
                        },
                        "typeName": {
                          "names": [
                            {
                              "String": {
                                "str": "text"
                              }
                            }
                          ],
                          "typemod": -1,
                          "location": 4812
                        },
                        "location": 4810
                      }
                    }
                  ],
                  "location": 4796
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4818
            }
          }
        ],
        "location": 4772
      }
    },
    {
      "ColumnDef": {
        "colname": "purpose",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 4840
        },
        "is_local": true,
        "location": 4832
      }
    },
    {
      "ColumnDef": {
        "colname": "last_used_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 4863
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4888,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 4896
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4914
            }
          }
        ],
        "location": 4850
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 4939
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 4964,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 4972
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 4990
            }
          }
        ],
        "location": 4928
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 5016
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 5048
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 5145
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "account_api_key_id"
                    }
                  }
                ],
                "location": 5176
              }
            },
            "location": 5176
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 5216
              }
            },
            "location": 5216
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "key_string"
                    }
                  }
                ],
                "location": 5248
              }
            },
            "location": 5248
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "purpose"
                    }
                  }
                ],
                "location": 5280
              }
            },
            "location": 5280
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "last_used_at"
                    }
                  }
                ],
                "location": 5309
              }
            },
            "location": 5309
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 5343
              }
            },
            "location": 5343
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account_api_key",
            "inh": true,
            "relpersistence": "p",
            "location": 5378
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 5416
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 5445
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 5548
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "account_endpoint_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 5598
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 5603,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 5611
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5629
            }
          }
        ],
        "location": 5578
      }
    },
    {
      "ColumnDef": {
        "colname": "account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 5654
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5659
            }
          }
        ],
        "location": 5643
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 5685
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5690
            }
          }
        ],
        "location": 5673
      }
    },
    {
      "ColumnDef": {
        "colname": "params",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "jsonb"
              }
            }
          ],
          "typemod": -1,
          "location": 5711
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 5717,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "{}"
                        }
                      },
                      "location": 5725
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "jsonb"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": 5731
                  },
                  "location": 5729
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5737
            }
          }
        ],
        "location": 5704
      }
    },
    {
      "ColumnDef": {
        "colname": "run_frequency_secs",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "int4"
              }
            }
          ],
          "typemod": -1,
          "location": 5770
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 5778,
              "raw_expr": {
                "A_Const": {
                  "val": {
                    "Integer": {
                      "ival": 300
                    }
                  },
                  "location": 5786
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5790
            }
          }
        ],
        "location": 5751
      }
    },
    {
      "ColumnDef": {
        "colname": "error",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 5810
        },
        "is_local": true,
        "location": 5804
      }
    },
    {
      "ColumnDef": {
        "colname": "last_run_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 5832
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 5857,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 5865
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5883
            }
          }
        ],
        "location": 5820
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 5908
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 5933,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 5941
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 5959
            }
          }
        ],
        "location": 5897
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 5985
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 6018
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 6116
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "account_endpoint_id"
                    }
                  }
                ],
                "location": 6148
              }
            },
            "location": 6148
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 6190
              }
            },
            "location": 6190
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_id"
                    }
                  }
                ],
                "location": 6223
              }
            },
            "location": 6223
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "params"
                    }
                  }
                ],
                "location": 6257
              }
            },
            "location": 6257
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "run_frequency_secs"
                    }
                  }
                ],
                "location": 6286
              }
            },
            "location": 6286
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "error"
                    }
                  }
                ],
                "location": 6327
              }
            },
            "location": 6327
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "last_run_at"
                    }
                  }
                ],
                "location": 6355
              }
            },
            "location": 6355
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 6389
              }
            },
            "location": 6389
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account_endpoint",
            "inh": true,
            "relpersistence": "p",
            "location": 6425
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 6464
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 6494
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 6593
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "account_tree_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 6635
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 6640,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 6648
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6666
            }
          }
        ],
        "location": 6619
      }
    },
    {
      "ColumnDef": {
        "colname": "account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 6691
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6696
            }
          }
        ],
        "location": 6680
      }
    },
    {
      "ColumnDef": {
        "colname": "tree_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 6718
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6723
            }
          }
        ],
        "location": 6710
      }
    },
    {
      "ColumnDef": {
        "colname": "state",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "jsonb"
              }
            }
          ],
          "typemod": -1,
          "location": 6743
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 6749,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "{}"
                        }
                      },
                      "location": 6757
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "jsonb"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": 6763
                  },
                  "location": 6761
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6769
            }
          }
        ],
        "location": 6737
      }
    },
    {
      "ColumnDef": {
        "colname": "complete",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "bool"
              }
            }
          ],
          "typemod": -1,
          "location": 6792
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 6800,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "f"
                        }
                      },
                      "location": 6808
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "pg_catalog"
                        }
                      },
                      {
                        "String": {
                          "str": "bool"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": -1
                  },
                  "location": -1
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6814
            }
          }
        ],
        "location": 6783
      }
    },
    {
      "ColumnDef": {
        "colname": "last_modified_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 6845
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 6870,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 6878
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6896
            }
          }
        ],
        "location": 6828
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 6921
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 6946,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 6954
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 6972
            }
          }
        ],
        "location": 6910
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 6998
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 7027
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 7118
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "tree_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 7144
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 7149,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 7157
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7175
            }
          }
        ],
        "location": 7136
      }
    },
    {
      "ColumnDef": {
        "colname": "tree_num",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "int4"
              }
            }
          ],
          "typemod": -1,
          "location": 7198
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7206
            }
          }
        ],
        "location": 7189
      }
    },
    {
      "ColumnDef": {
        "colname": "tree_name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 7230
        },
        "is_local": true,
        "location": 7220
      }
    },
    {
      "ColumnDef": {
        "colname": "tree_key",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 7249
        },
        "is_local": true,
        "location": 7240
      }
    },
    {
      "ColumnDef": {
        "colname": "owner_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 7268
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7273
            }
          }
        ],
        "location": 7259
      }
    },
    {
      "ColumnDef": {
        "colname": "tree_def",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "jsonb"
              }
            }
          ],
          "typemod": -1,
          "location": 7296
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7302
            }
          }
        ],
        "location": 7287
      }
    },
    {
      "ColumnDef": {
        "colname": "public",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "bool"
              }
            }
          ],
          "typemod": -1,
          "location": 7323
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 7331,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "f"
                        }
                      },
                      "location": 7339
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "pg_catalog"
                        }
                      },
                      {
                        "String": {
                          "str": "bool"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": -1
                  },
                  "location": -1
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7345
            }
          }
        ],
        "location": 7316
      }
    },
    {
      "ColumnDef": {
        "colname": "last_modified_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 7376
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 7401,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 7409
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7427
            }
          }
        ],
        "location": 7359
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 7452
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 7477,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 7485
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 7503
            }
          }
        ],
        "location": 7441
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 7529
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 7550
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 7644
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "account_tree_id"
                    }
                  }
                ],
                "location": 7672
              }
            },
            "location": 7672
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 7706
              }
            },
            "location": 7706
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "tree_id"
                    }
                  }
                ],
                "location": 7735
              }
            },
            "location": 7735
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "state"
                    }
                  }
                ],
                "location": 7761
              }
            },
            "location": 7761
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "complete"
                    }
                  }
                ],
                "location": 7785
              }
            },
            "location": 7785
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "last_modified_at"
                    }
                  }
                ],
                "location": 7812
              }
            },
            "location": 7812
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_tree"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 7847
              }
            },
            "location": 7847
          }
        },
        {
          "ResTarget": {
            "name": "tree_key",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "val": {
                            "ColumnRef": {
                              "fields": [
                                {
                                  "String": {
                                    "str": "tree"
                                  }
                                },
                                {
                                  "String": {
                                    "str": "tree_key"
                                  }
                                }
                              ],
                              "location": 7885
                            }
                          },
                          "location": 7885
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeVar": {
                          "schemaname": "public",
                          "relname": "tree",
                          "inh": true,
                          "relpersistence": "p",
                          "location": 7915
                        }
                      }
                    ],
                    "whereClause": {
                      "A_Expr": {
                        "kind": "AEXPR_OP",
                        "name": [
                          {
                            "String": {
                              "str": "="
                            }
                          }
                        ],
                        "lexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "tree_id"
                                }
                              }
                            ],
                            "location": 7944
                          }
                        },
                        "rexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account_tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "tree_id"
                                }
                              }
                            ],
                            "location": 7959
                          }
                        },
                        "location": 7957
                      }
                    },
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 7876
              }
            },
            "location": 7876
          }
        },
        {
          "ResTarget": {
            "name": "tree_name",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "val": {
                            "ColumnRef": {
                              "fields": [
                                {
                                  "String": {
                                    "str": "tree"
                                  }
                                },
                                {
                                  "String": {
                                    "str": "tree_name"
                                  }
                                }
                              ],
                              "location": 8008
                            }
                          },
                          "location": 8008
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeVar": {
                          "schemaname": "public",
                          "relname": "tree",
                          "inh": true,
                          "relpersistence": "p",
                          "location": 8039
                        }
                      }
                    ],
                    "whereClause": {
                      "A_Expr": {
                        "kind": "AEXPR_OP",
                        "name": [
                          {
                            "String": {
                              "str": "="
                            }
                          }
                        ],
                        "lexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "tree_id"
                                }
                              }
                            ],
                            "location": 8068
                          }
                        },
                        "rexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account_tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "tree_id"
                                }
                              }
                            ],
                            "location": 8083
                          }
                        },
                        "location": 8081
                      }
                    },
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 7999
              }
            },
            "location": 7999
          }
        },
        {
          "ResTarget": {
            "name": "tree_path",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "val": {
                            "A_Expr": {
                              "kind": "AEXPR_OP",
                              "name": [
                                {
                                  "String": {
                                    "str": "||"
                                  }
                                }
                              ],
                              "lexpr": {
                                "A_Expr": {
                                  "kind": "AEXPR_OP",
                                  "name": [
                                    {
                                      "String": {
                                        "str": "||"
                                      }
                                    }
                                  ],
                                  "lexpr": {
                                    "ColumnRef": {
                                      "fields": [
                                        {
                                          "String": {
                                            "str": "account"
                                          }
                                        },
                                        {
                                          "String": {
                                            "str": "account_name"
                                          }
                                        }
                                      ],
                                      "location": 8135
                                    }
                                  },
                                  "rexpr": {
                                    "TypeCast": {
                                      "arg": {
                                        "A_Const": {
                                          "val": {
                                            "String": {
                                              "str": "/"
                                            }
                                          },
                                          "location": 8159
                                        }
                                      },
                                      "typeName": {
                                        "names": [
                                          {
                                            "String": {
                                              "str": "text"
                                            }
                                          }
                                        ],
                                        "typemod": -1,
                                        "location": 8164
                                      },
                                      "location": 8162
                                    }
                                  },
                                  "location": 8156
                                }
                              },
                              "rexpr": {
                                "SubLink": {
                                  "subLinkType": "EXPR_SUBLINK",
                                  "subselect": {
                                    "SelectStmt": {
                                      "targetList": [
                                        {
                                          "ResTarget": {
                                            "val": {
                                              "ColumnRef": {
                                                "fields": [
                                                  {
                                                    "String": {
                                                      "str": "tree"
                                                    }
                                                  },
                                                  {
                                                    "String": {
                                                      "str": "tree_key"
                                                    }
                                                  }
                                                ],
                                                "location": 8182
                                              }
                                            },
                                            "location": 8182
                                          }
                                        }
                                      ],
                                      "fromClause": [
                                        {
                                          "RangeVar": {
                                            "schemaname": "public",
                                            "relname": "tree",
                                            "inh": true,
                                            "relpersistence": "p",
                                            "location": 8220
                                          }
                                        }
                                      ],
                                      "whereClause": {
                                        "A_Expr": {
                                          "kind": "AEXPR_OP",
                                          "name": [
                                            {
                                              "String": {
                                                "str": "="
                                              }
                                            }
                                          ],
                                          "lexpr": {
                                            "ColumnRef": {
                                              "fields": [
                                                {
                                                  "String": {
                                                    "str": "tree"
                                                  }
                                                },
                                                {
                                                  "String": {
                                                    "str": "tree_id"
                                                  }
                                                }
                                              ],
                                              "location": 8257
                                            }
                                          },
                                          "rexpr": {
                                            "ColumnRef": {
                                              "fields": [
                                                {
                                                  "String": {
                                                    "str": "account_tree"
                                                  }
                                                },
                                                {
                                                  "String": {
                                                    "str": "tree_id"
                                                  }
                                                }
                                              ],
                                              "location": 8272
                                            }
                                          },
                                          "location": 8270
                                        }
                                      },
                                      "limitOption": "LIMIT_OPTION_DEFAULT",
                                      "op": "SETOP_NONE"
                                    }
                                  },
                                  "location": 8173
                                }
                              },
                              "location": 8170
                            }
                          },
                          "location": 8133
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeVar": {
                          "schemaname": "public",
                          "relname": "account",
                          "inh": true,
                          "relpersistence": "p",
                          "location": 8312
                        }
                      }
                    ],
                    "whereClause": {
                      "A_Expr": {
                        "kind": "AEXPR_OP",
                        "name": [
                          {
                            "String": {
                              "str": "="
                            }
                          }
                        ],
                        "lexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account"
                                }
                              },
                              {
                                "String": {
                                  "str": "account_id"
                                }
                              }
                            ],
                            "location": 8344
                          }
                        },
                        "rexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account_tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "account_id"
                                }
                              }
                            ],
                            "location": 8365
                          }
                        },
                        "location": 8363
                      }
                    },
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 8124
              }
            },
            "location": 8124
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account_tree",
            "inh": true,
            "relpersistence": "p",
            "location": 8412
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 8447
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 8473
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 8568
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "endpoint_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 8602
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 8607,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 8615
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8633
            }
          }
        ],
        "location": 8590
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 8661
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8666
            }
          }
        ],
        "location": 8647
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_key",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 8693
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8698
            }
          }
        ],
        "location": 8680
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_options",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "jsonb"
              }
            }
          ],
          "typemod": -1,
          "location": 8729
        },
        "is_local": true,
        "location": 8712
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_url",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 8753
        },
        "is_local": true,
        "location": 8740
      }
    },
    {
      "ColumnDef": {
        "colname": "official",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "bool"
              }
            }
          ],
          "typemod": -1,
          "location": 8772
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 8780,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "f"
                        }
                      },
                      "location": 8788
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "pg_catalog"
                        }
                      },
                      {
                        "String": {
                          "str": "bool"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": -1
                  },
                  "location": -1
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8794
            }
          }
        ],
        "location": 8763
      }
    },
    {
      "ColumnDef": {
        "colname": "owner_account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 8825
        },
        "is_local": true,
        "location": 8808
      }
    },
    {
      "ColumnDef": {
        "colname": "public",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "bool"
              }
            }
          ],
          "typemod": -1,
          "location": 8842
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 8850,
              "raw_expr": {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "f"
                        }
                      },
                      "location": 8858
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "pg_catalog"
                        }
                      },
                      {
                        "String": {
                          "str": "bool"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": -1
                  },
                  "location": -1
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8864
            }
          }
        ],
        "location": 8835
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 8889
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 8914,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 8922
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 8940
            }
          }
        ],
        "location": 8878
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 8966
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 8991
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 9081
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_id"
                    }
                  }
                ],
                "location": 9105
              }
            },
            "location": 9105
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_name"
                    }
                  }
                ],
                "location": 9131
              }
            },
            "location": 9131
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_key"
                    }
                  }
                ],
                "location": 9159
              }
            },
            "location": 9159
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_options"
                    }
                  }
                ],
                "location": 9186
              }
            },
            "location": 9186
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_url"
                    }
                  }
                ],
                "location": 9217
              }
            },
            "location": 9217
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "official"
                    }
                  }
                ],
                "location": 9244
              }
            },
            "location": 9244
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "owner_account_id"
                    }
                  }
                ],
                "location": 9267
              }
            },
            "location": 9267
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "public"
                    }
                  }
                ],
                "location": 9298
              }
            },
            "location": 9298
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "endpoint"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 9319
              }
            },
            "location": 9319
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "endpoint",
            "inh": true,
            "relpersistence": "p",
            "location": 9347
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 9378
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 9400
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 9492
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "meter_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 9520
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 9525,
              "raw_expr": {
                "FuncCall": {
                  "funcname": [
                    {
                      "String": {
                        "str": "gen_random_uuid"
                      }
                    }
                  ],
                  "location": 9533
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9551
            }
          }
        ],
        "location": 9511
      }
    },
    {
      "ColumnDef": {
        "colname": "account_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 9576
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9581
            }
          }
        ],
        "location": 9565
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "uuid"
              }
            }
          ],
          "typemod": -1,
          "location": 9607
        },
        "is_local": true,
        "location": 9595
      }
    },
    {
      "ColumnDef": {
        "colname": "endpoint_name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 9631
        },
        "is_local": true,
        "location": 9617
      }
    },
    {
      "ColumnDef": {
        "colname": "meter_name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 9652
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9657
            }
          }
        ],
        "location": 9641
      }
    },
    {
      "ColumnDef": {
        "colname": "meter_key",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 9681
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9686
            }
          }
        ],
        "location": 9671
      }
    },
    {
      "ColumnDef": {
        "colname": "description",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 9712
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9717
            }
          }
        ],
        "location": 9700
      }
    },
    {
      "ColumnDef": {
        "colname": "output_type",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "text"
              }
            }
          ],
          "typemod": -1,
          "location": 9743
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9748
            }
          }
        ],
        "location": 9731
      }
    },
    {
      "ColumnDef": {
        "colname": "output",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "jsonb"
              }
            }
          ],
          "typemod": -1,
          "location": 9769
        },
        "is_local": true,
        "location": 9762
      }
    },
    {
      "ColumnDef": {
        "colname": "last_modified_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 9797
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 9822,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 9830
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9848
            }
          }
        ],
        "location": 9780
      }
    },
    {
      "ColumnDef": {
        "colname": "created_at",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamptz"
              }
            }
          ],
          "typemod": -1,
          "location": 9873
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_DEFAULT",
              "location": 9898,
              "raw_expr": {
                "SQLValueFunction": {
                  "op": "SVFOP_CURRENT_TIMESTAMP",
                  "typmod": -1,
                  "location": 9906
                }
              }
            }
          },
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 9924
            }
          }
        ],
        "location": 9862
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 9950
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 9972
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 10059
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_id"
                    }
                  }
                ],
                "location": 10080
              }
            },
            "location": 10080
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 10100
              }
            },
            "location": 10100
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_id"
                    }
                  }
                ],
                "location": 10122
              }
            },
            "location": 10122
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_name"
                    }
                  }
                ],
                "location": 10145
              }
            },
            "location": 10145
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_name"
                    }
                  }
                ],
                "location": 10170
              }
            },
            "location": 10170
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_key"
                    }
                  }
                ],
                "location": 10192
              }
            },
            "location": 10192
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "description"
                    }
                  }
                ],
                "location": 10213
              }
            },
            "location": 10213
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "output_type"
                    }
                  }
                ],
                "location": 10236
              }
            },
            "location": 10236
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "output"
                    }
                  }
                ],
                "location": 10259
              }
            },
            "location": 10259
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "last_modified_at"
                    }
                  }
                ],
                "location": 10277
              }
            },
            "location": 10277
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 10305
              }
            },
            "location": 10305
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "meter",
            "inh": true,
            "relpersistence": "p",
            "location": 10330
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 10358
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 10377
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "super_api",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 10472
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 10501
              }
            },
            "location": 10501
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_num"
                    }
                  }
                ],
                "location": 10525
              }
            },
            "location": 10525
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "account_name"
                    }
                  }
                ],
                "location": 10550
              }
            },
            "location": 10550
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "email"
                    }
                  }
                ],
                "location": 10576
              }
            },
            "location": 10576
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "auth0_id"
                    }
                  }
                ],
                "location": 10595
              }
            },
            "location": 10595
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "last_active_at"
                    }
                  }
                ],
                "location": 10617
              }
            },
            "location": 10617
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 10645
              }
            },
            "location": 10645
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account",
            "inh": true,
            "relpersistence": "p",
            "location": 10672
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "super_api",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 10702
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 10729
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "super_api",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 10822
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_id"
                    }
                  }
                ],
                "location": 10849
              }
            },
            "location": 10849
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 10869
              }
            },
            "location": 10869
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_id"
                    }
                  }
                ],
                "location": 10891
              }
            },
            "location": 10891
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "endpoint_name"
                    }
                  }
                ],
                "location": 10914
              }
            },
            "location": 10914
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_name"
                    }
                  }
                ],
                "location": 10939
              }
            },
            "location": 10939
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "meter_key"
                    }
                  }
                ],
                "location": 10961
              }
            },
            "location": 10961
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "description"
                    }
                  }
                ],
                "location": 10982
              }
            },
            "location": 10982
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "output_type"
                    }
                  }
                ],
                "location": 11005
              }
            },
            "location": 11005
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "output"
                    }
                  }
                ],
                "location": 11028
              }
            },
            "location": 11028
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "last_modified_at"
                    }
                  }
                ],
                "location": 11046
              }
            },
            "location": 11046
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "meter"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 11074
              }
            },
            "location": 11074
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "meter",
            "inh": true,
            "relpersistence": "p",
            "location": 11099
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "super_api",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 11127
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 11152
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// ViewStmt
{
  "view": {
    "schemaname": "api",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 11238
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "tree_id"
                    }
                  }
                ],
                "location": 11258
              }
            },
            "location": 11258
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "tree_name"
                    }
                  }
                ],
                "location": 11276
              }
            },
            "location": 11276
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "tree_key"
                    }
                  }
                ],
                "location": 11296
              }
            },
            "location": 11296
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "owner_id"
                    }
                  }
                ],
                "location": 11315
              }
            },
            "location": 11315
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "tree_def"
                    }
                  }
                ],
                "location": 11334
              }
            },
            "location": 11334
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "public"
                    }
                  }
                ],
                "location": 11353
              }
            },
            "location": 11353
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "last_modified_at"
                    }
                  }
                ],
                "location": 11370
              }
            },
            "location": 11370
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "tree"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 11397
              }
            },
            "location": 11397
          }
        },
        {
          "ResTarget": {
            "name": "tree_path",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "val": {
                            "A_Expr": {
                              "kind": "AEXPR_OP",
                              "name": [
                                {
                                  "String": {
                                    "str": "||"
                                  }
                                }
                              ],
                              "lexpr": {
                                "A_Expr": {
                                  "kind": "AEXPR_OP",
                                  "name": [
                                    {
                                      "String": {
                                        "str": "||"
                                      }
                                    }
                                  ],
                                  "lexpr": {
                                    "ColumnRef": {
                                      "fields": [
                                        {
                                          "String": {
                                            "str": "account"
                                          }
                                        },
                                        {
                                          "String": {
                                            "str": "account_name"
                                          }
                                        }
                                      ],
                                      "location": 11429
                                    }
                                  },
                                  "rexpr": {
                                    "TypeCast": {
                                      "arg": {
                                        "A_Const": {
                                          "val": {
                                            "String": {
                                              "str": "/"
                                            }
                                          },
                                          "location": 11453
                                        }
                                      },
                                      "typeName": {
                                        "names": [
                                          {
                                            "String": {
                                              "str": "text"
                                            }
                                          }
                                        ],
                                        "typemod": -1,
                                        "location": 11458
                                      },
                                      "location": 11456
                                    }
                                  },
                                  "location": 11450
                                }
                              },
                              "rexpr": {
                                "ColumnRef": {
                                  "fields": [
                                    {
                                      "String": {
                                        "str": "tree"
                                      }
                                    },
                                    {
                                      "String": {
                                        "str": "tree_key"
                                      }
                                    }
                                  ],
                                  "location": 11467
                                }
                              },
                              "location": 11464
                            }
                          },
                          "location": 11427
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeVar": {
                          "schemaname": "super_api",
                          "relname": "account",
                          "inh": true,
                          "relpersistence": "p",
                          "location": 11498
                        }
                      }
                    ],
                    "whereClause": {
                      "A_Expr": {
                        "kind": "AEXPR_OP",
                        "name": [
                          {
                            "String": {
                              "str": "="
                            }
                          }
                        ],
                        "lexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account"
                                }
                              },
                              {
                                "String": {
                                  "str": "account_id"
                                }
                              }
                            ],
                            "location": 11533
                          }
                        },
                        "rexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "owner_id"
                                }
                              }
                            ],
                            "location": 11554
                          }
                        },
                        "location": 11552
                      }
                    },
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 11418
              }
            },
            "location": 11418
          }
        },
        {
          "ResTarget": {
            "name": "owner_name",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "val": {
                            "ColumnRef": {
                              "fields": [
                                {
                                  "String": {
                                    "str": "account"
                                  }
                                },
                                {
                                  "String": {
                                    "str": "account_name"
                                  }
                                }
                              ],
                              "location": 11597
                            }
                          },
                          "location": 11597
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeVar": {
                          "schemaname": "super_api",
                          "relname": "account",
                          "inh": true,
                          "relpersistence": "p",
                          "location": 11634
                        }
                      }
                    ],
                    "whereClause": {
                      "A_Expr": {
                        "kind": "AEXPR_OP",
                        "name": [
                          {
                            "String": {
                              "str": "="
                            }
                          }
                        ],
                        "lexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "account"
                                }
                              },
                              {
                                "String": {
                                  "str": "account_id"
                                }
                              }
                            ],
                            "location": 11669
                          }
                        },
                        "rexpr": {
                          "ColumnRef": {
                            "fields": [
                              {
                                "String": {
                                  "str": "tree"
                                }
                              },
                              {
                                "String": {
                                  "str": "owner_id"
                                }
                              }
                            ],
                            "location": 11690
                          }
                        },
                        "location": 11688
                      }
                    },
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 11588
              }
            },
            "location": 11588
          }
        },
        {
          "ResTarget": {
            "name": "owner_meter_defs",
            "val": {
              "SubLink": {
                "subLinkType": "EXPR_SUBLINK",
                "subselect": {
                  "SelectStmt": {
                    "targetList": [
                      {
                        "ResTarget": {
                          "name": "jsonb_object_agg",
                          "val": {
                            "FuncCall": {
                              "funcname": [
                                {
                                  "String": {
                                    "str": "jsonb_object_agg"
                                  }
                                }
                              ],
                              "args": [
                                {
                                  "ColumnRef": {
                                    "fields": [
                                      {
                                        "String": {
                                          "str": "requirements"
                                        }
                                      },
                                      {
                                        "String": {
                                          "str": "meter_key"
                                        }
                                      }
                                    ],
                                    "location": 11751
                                  }
                                },
                                {
                                  "SubLink": {
                                    "subLinkType": "EXPR_SUBLINK",
                                    "subselect": {
                                      "SelectStmt": {
                                        "targetList": [
                                          {
                                            "ResTarget": {
                                              "name": "jsonb_build_object",
                                              "val": {
                                                "FuncCall": {
                                                  "funcname": [
                                                    {
                                                      "String": {
                                                        "str": "jsonb_build_object"
                                                      }
                                                    }
                                                  ],
                                                  "args": [
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "meter_name"
                                                          }
                                                        },
                                                        "location": 11803
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "meter_name"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11817
                                                      }
                                                    },
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "meter_key"
                                                          }
                                                        },
                                                        "location": 11835
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "meter_key"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11848
                                                      }
                                                    },
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "endpoint_name"
                                                          }
                                                        },
                                                        "location": 11865
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "endpoint_name"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11882
                                                      }
                                                    },
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "endpoint_id"
                                                          }
                                                        },
                                                        "location": 11903
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "endpoint_id"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11918
                                                      }
                                                    },
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "description"
                                                          }
                                                        },
                                                        "location": 11937
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "description"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11952
                                                      }
                                                    },
                                                    {
                                                      "A_Const": {
                                                        "val": {
                                                          "String": {
                                                            "str": "output_type"
                                                          }
                                                        },
                                                        "location": 11971
                                                      }
                                                    },
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "meter"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "output_type"
                                                            }
                                                          }
                                                        ],
                                                        "location": 11986
                                                      }
                                                    }
                                                  ],
                                                  "location": 11784
                                                }
                                              },
                                              "location": 11784
                                            }
                                          }
                                        ],
                                        "fromClause": [
                                          {
                                            "RangeVar": {
                                              "schemaname": "super_api",
                                              "relname": "meter",
                                              "inh": true,
                                              "relpersistence": "p",
                                              "location": 12051
                                            }
                                          }
                                        ],
                                        "whereClause": {
                                          "BoolExpr": {
                                            "boolop": "AND_EXPR",
                                            "args": [
                                              {
                                                "A_Expr": {
                                                  "kind": "AEXPR_OP",
                                                  "name": [
                                                    {
                                                      "String": {
                                                        "str": "="
                                                      }
                                                    }
                                                  ],
                                                  "lexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "meter"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "meter_key"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12093
                                                    }
                                                  },
                                                  "rexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "requirements"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "meter_key"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12111
                                                    }
                                                  },
                                                  "location": 12109
                                                }
                                              },
                                              {
                                                "A_Expr": {
                                                  "kind": "AEXPR_OP",
                                                  "name": [
                                                    {
                                                      "String": {
                                                        "str": "="
                                                      }
                                                    }
                                                  ],
                                                  "lexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "meter"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "account_id"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12140
                                                    }
                                                  },
                                                  "rexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "tree"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "owner_id"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12159
                                                    }
                                                  },
                                                  "location": 12157
                                                }
                                              }
                                            ],
                                            "location": 12135
                                          }
                                        },
                                        "limitOption": "LIMIT_OPTION_DEFAULT",
                                        "op": "SETOP_NONE"
                                      }
                                    },
                                    "location": 11775
                                  }
                                }
                              ],
                              "location": 11734
                            }
                          },
                          "location": 11734
                        }
                      }
                    ],
                    "fromClause": [
                      {
                        "RangeSubselect": {
                          "subquery": {
                            "SelectStmt": {
                              "targetList": [
                                {
                                  "ResTarget": {
                                    "name": "meter_key",
                                    "val": {
                                      "FuncCall": {
                                        "funcname": [
                                          {
                                            "String": {
                                              "str": "jsonb_object_keys"
                                            }
                                          }
                                        ],
                                        "args": [
                                          {
                                            "A_Expr": {
                                              "kind": "AEXPR_OP",
                                              "name": [
                                                {
                                                  "String": {
                                                    "str": "->"
                                                  }
                                                }
                                              ],
                                              "lexpr": {
                                                "A_Expr": {
                                                  "kind": "AEXPR_OP",
                                                  "name": [
                                                    {
                                                      "String": {
                                                        "str": "->"
                                                      }
                                                    }
                                                  ],
                                                  "lexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "tree"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "tree_def"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12242
                                                    }
                                                  },
                                                  "rexpr": {
                                                    "ColumnRef": {
                                                      "fields": [
                                                        {
                                                          "String": {
                                                            "str": "tree_names_set"
                                                          }
                                                        },
                                                        {
                                                          "String": {
                                                            "str": "tree_name"
                                                          }
                                                        }
                                                      ],
                                                      "location": 12259
                                                    }
                                                  },
                                                  "location": 12256
                                                }
                                              },
                                              "rexpr": {
                                                "TypeCast": {
                                                  "arg": {
                                                    "A_Const": {
                                                      "val": {
                                                        "String": {
                                                          "str": "requirements"
                                                        }
                                                      },
                                                      "location": 12288
                                                    }
                                                  },
                                                  "typeName": {
                                                    "names": [
                                                      {
                                                        "String": {
                                                          "str": "text"
                                                        }
                                                      }
                                                    ],
                                                    "typemod": -1,
                                                    "location": 12304
                                                  },
                                                  "location": 12302
                                                }
                                              },
                                              "location": 12285
                                            }
                                          }
                                        ],
                                        "location": 12222
                                      }
                                    },
                                    "location": 12222
                                  }
                                }
                              ],
                              "fromClause": [
                                {
                                  "RangeSubselect": {
                                    "subquery": {
                                      "SelectStmt": {
                                        "targetList": [
                                          {
                                            "ResTarget": {
                                              "name": "tree_name",
                                              "val": {
                                                "FuncCall": {
                                                  "funcname": [
                                                    {
                                                      "String": {
                                                        "str": "jsonb_object_keys"
                                                      }
                                                    }
                                                  ],
                                                  "args": [
                                                    {
                                                      "ColumnRef": {
                                                        "fields": [
                                                          {
                                                            "String": {
                                                              "str": "tree"
                                                            }
                                                          },
                                                          {
                                                            "String": {
                                                              "str": "tree_def"
                                                            }
                                                          }
                                                        ],
                                                        "location": 12375
                                                      }
                                                    }
                                                  ],
                                                  "location": 12357
                                                }
                                              },
                                              "location": 12357
                                            }
                                          }
                                        ],
                                        "limitOption": "LIMIT_OPTION_DEFAULT",
                                        "op": "SETOP_NONE"
                                      }
                                    },
                                    "alias": {
                                      "aliasname": "tree_names_set"
                                    }
                                  }
                                }
                              ],
                              "limitOption": "LIMIT_OPTION_DEFAULT",
                              "op": "SETOP_NONE"
                            }
                          },
                          "alias": {
                            "aliasname": "requirements"
                          }
                        }
                      }
                    ],
                    "limitOption": "LIMIT_OPTION_DEFAULT",
                    "op": "SETOP_NONE"
                  }
                },
                "location": 11725
              }
            },
            "location": 11725
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "tree",
            "inh": true,
            "relpersistence": "p",
            "location": 12462
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "api",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 12489
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "api_user",
          "location": 12507
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "account_account_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 12623
  },
  "options": [
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "TypeName": {
            "names": [
              {
                "String": {
                  "str": "pg_catalog"
                }
              },
              {
                "String": {
                  "str": "int4"
                }
              }
            ],
            "typemod": -1,
            "location": 12661
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 12658
      }
    },
    {
      "DefElem": {
        "defname": "start",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 12673
      }
    },
    {
      "DefElem": {
        "defname": "increment",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 12690
      }
    },
    {
      "DefElem": {
        "defname": "minvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 12709
      }
    },
    {
      "DefElem": {
        "defname": "maxvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 12725
      }
    },
    {
      "DefElem": {
        "defname": "cache",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 12741
      }
    }
  ]
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_account_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 12764
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 12804
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "account_account_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 12928
  },
  "options": [
    {
      "DefElem": {
        "defname": "owned_by",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "public"
                }
              },
              {
                "String": {
                  "str": "account"
                }
              },
              {
                "String": {
                  "str": "account_num"
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 12959
      }
    }
  ]
}

// CreateStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "pgmigrations",
    "inh": true,
    "relpersistence": "p",
    "location": 13086
  },
  "tableElts": [
    {
      "ColumnDef": {
        "colname": "id",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "int4"
              }
            }
          ],
          "typemod": -1,
          "location": 13115
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 13123
            }
          }
        ],
        "location": 13112
      }
    },
    {
      "ColumnDef": {
        "colname": "name",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "varchar"
              }
            }
          ],
          "typmods": [
            {
              "A_Const": {
                "val": {
                  "Integer": {
                    "ival": 255
                  }
                },
                "location": 13160
              }
            }
          ],
          "typemod": -1,
          "location": 13142
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 13165
            }
          }
        ],
        "location": 13137
      }
    },
    {
      "ColumnDef": {
        "colname": "run_on",
        "typeName": {
          "names": [
            {
              "String": {
                "str": "pg_catalog"
              }
            },
            {
              "String": {
                "str": "timestamp"
              }
            }
          ],
          "typemod": -1,
          "location": 13186
        },
        "is_local": true,
        "constraints": [
          {
            "Constraint": {
              "contype": "CONSTR_NOTNULL",
              "location": 13214
            }
          }
        ],
        "location": 13179
      }
    }
  ],
  "oncommit": "ONCOMMIT_NOOP"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "pgmigrations",
    "inh": true,
    "relpersistence": "p",
    "location": 13240
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 13269
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "pgmigrations_id_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 13381
  },
  "options": [
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "TypeName": {
            "names": [
              {
                "String": {
                  "str": "pg_catalog"
                }
              },
              {
                "String": {
                  "str": "int4"
                }
              }
            ],
            "typemod": -1,
            "location": 13415
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13412
      }
    },
    {
      "DefElem": {
        "defname": "start",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13427
      }
    },
    {
      "DefElem": {
        "defname": "increment",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13444
      }
    },
    {
      "DefElem": {
        "defname": "minvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 13463
      }
    },
    {
      "DefElem": {
        "defname": "maxvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 13479
      }
    },
    {
      "DefElem": {
        "defname": "cache",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13495
      }
    }
  ]
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "pgmigrations_id_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 13518
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 13554
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "pgmigrations_id_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 13674
  },
  "options": [
    {
      "DefElem": {
        "defname": "owned_by",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "public"
                }
              },
              {
                "String": {
                  "str": "pgmigrations"
                }
              },
              {
                "String": {
                  "str": "id"
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13701
      }
    }
  ]
}

// CreateSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "tree_tree_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 13835
  },
  "options": [
    {
      "DefElem": {
        "defname": "as",
        "arg": {
          "TypeName": {
            "names": [
              {
                "String": {
                  "str": "pg_catalog"
                }
              },
              {
                "String": {
                  "str": "int4"
                }
              }
            ],
            "typemod": -1,
            "location": 13867
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13864
      }
    },
    {
      "DefElem": {
        "defname": "start",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13879
      }
    },
    {
      "DefElem": {
        "defname": "increment",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13896
      }
    },
    {
      "DefElem": {
        "defname": "minvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 13915
      }
    },
    {
      "DefElem": {
        "defname": "maxvalue",
        "defaction": "DEFELEM_UNSPEC",
        "location": 13931
      }
    },
    {
      "DefElem": {
        "defname": "cache",
        "arg": {
          "Integer": {
            "ival": 1
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 13947
      }
    }
  ]
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree_tree_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 13970
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 14004
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterSeqStmt
{
  "sequence": {
    "schemaname": "public",
    "relname": "tree_tree_num_seq",
    "inh": true,
    "relpersistence": "p",
    "location": 14122
  },
  "options": [
    {
      "DefElem": {
        "defname": "owned_by",
        "arg": {
          "List": {
            "items": [
              {
                "String": {
                  "str": "public"
                }
              },
              {
                "String": {
                  "str": "tree"
                }
              },
              {
                "String": {
                  "str": "tree_num"
                }
              }
            ]
          }
        },
        "defaction": "DEFELEM_UNSPEC",
        "location": 14147
      }
    }
  ]
}

// ViewStmt
{
  "view": {
    "schemaname": "super_api",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 14272
  },
  "query": {
    "SelectStmt": {
      "targetList": [
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "account_api_key_id"
                    }
                  }
                ],
                "location": 14309
              }
            },
            "location": 14309
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "account_id"
                    }
                  }
                ],
                "location": 14349
              }
            },
            "location": 14349
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "key_string"
                    }
                  }
                ],
                "location": 14381
              }
            },
            "location": 14381
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "purpose"
                    }
                  }
                ],
                "location": 14413
              }
            },
            "location": 14413
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "last_used_at"
                    }
                  }
                ],
                "location": 14442
              }
            },
            "location": 14442
          }
        },
        {
          "ResTarget": {
            "val": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "account_api_key"
                    }
                  },
                  {
                    "String": {
                      "str": "created_at"
                    }
                  }
                ],
                "location": 14476
              }
            },
            "location": 14476
          }
        }
      ],
      "fromClause": [
        {
          "RangeVar": {
            "schemaname": "public",
            "relname": "account_api_key",
            "inh": true,
            "relpersistence": "p",
            "location": 14511
          }
        }
      ],
      "limitOption": "LIMIT_OPTION_DEFAULT",
      "op": "SETOP_NONE"
    }
  },
  "withCheckOption": "NO_CHECK_OPTION"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "super_api",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 14549
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ChangeOwner",
        "newowner": {
          "roletype": "ROLESPEC_CSTRING",
          "rolename": "postgres",
          "location": 14584
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "relpersistence": "p",
    "location": 14696
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ColumnDefault",
        "name": "account_num",
        "def": {
          "FuncCall": {
            "funcname": [
              {
                "String": {
                  "str": "nextval"
                }
              }
            ],
            "args": [
              {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "public.account_account_num_seq"
                        }
                      },
                      "location": 14756
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "regclass"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": 14790
                  },
                  "location": 14788
                }
              }
            ],
            "location": 14748
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "pgmigrations",
    "relpersistence": "p",
    "location": 14900
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ColumnDefault",
        "name": "id",
        "def": {
          "FuncCall": {
            "funcname": [
              {
                "String": {
                  "str": "nextval"
                }
              }
            ],
            "args": [
              {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "public.pgmigrations_id_seq"
                        }
                      },
                      "location": 14956
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "regclass"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": 14986
                  },
                  "location": 14984
                }
              }
            ],
            "location": 14948
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "relpersistence": "p",
    "location": 15094
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_ColumnDefault",
        "name": "tree_num",
        "def": {
          "FuncCall": {
            "funcname": [
              {
                "String": {
                  "str": "nextval"
                }
              }
            ],
            "args": [
              {
                "TypeCast": {
                  "arg": {
                    "A_Const": {
                      "val": {
                        "String": {
                          "str": "public.tree_tree_num_seq"
                        }
                      },
                      "location": 15148
                    }
                  },
                  "typeName": {
                    "names": [
                      {
                        "String": {
                          "str": "regclass"
                        }
                      }
                    ],
                    "typemod": -1,
                    "location": 15176
                  },
                  "location": 15174
                }
              }
            ],
            "location": 15140
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "relpersistence": "p",
    "location": 15306
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "account_account_name_key",
            "location": 15329,
            "keys": [
              {
                "String": {
                  "str": "account_name"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "relpersistence": "p",
    "location": 15506
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "account_account_num_key",
            "location": 15529,
            "keys": [
              {
                "String": {
                  "str": "account_num"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_api_key",
    "relpersistence": "p",
    "location": 15709
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "account_api_key_pkey",
            "location": 15740,
            "keys": [
              {
                "String": {
                  "str": "account_api_key_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "relpersistence": "p",
    "location": 15918
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "account_email_key",
            "location": 15941,
            "keys": [
              {
                "String": {
                  "str": "email"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "relpersistence": "p",
    "location": 16111
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "account_endpoint_pkey",
            "location": 16143,
            "keys": [
              {
                "String": {
                  "str": "account_endpoint_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "relpersistence": "p",
    "location": 16318
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "account_pkey",
            "location": 16341,
            "keys": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "relpersistence": "p",
    "location": 16508
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "account_tree_pkey",
            "location": 16536,
            "keys": [
              {
                "String": {
                  "str": "account_tree_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "endpoint",
    "relpersistence": "p",
    "location": 16705
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "endpoint_pkey",
            "location": 16729,
            "keys": [
              {
                "String": {
                  "str": "endpoint_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "relpersistence": "p",
    "location": 16904
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "meter_account_id_meter_key_key",
            "location": 16925,
            "keys": [
              {
                "String": {
                  "str": "account_id"
                }
              },
              {
                "String": {
                  "str": "meter_key"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "relpersistence": "p",
    "location": 17102
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "meter_pkey",
            "location": 17123,
            "keys": [
              {
                "String": {
                  "str": "meter_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "pgmigrations",
    "relpersistence": "p",
    "location": 17286
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "pgmigrations_pkey",
            "location": 17314,
            "keys": [
              {
                "String": {
                  "str": "id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "relpersistence": "p",
    "location": 17479
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "tree_owner_id_tree_key_key",
            "location": 17499,
            "keys": [
              {
                "String": {
                  "str": "owner_id"
                }
              },
              {
                "String": {
                  "str": "tree_key"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "relpersistence": "p",
    "location": 17667
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_PRIMARY",
            "conname": "tree_pkey",
            "location": 17687,
            "keys": [
              {
                "String": {
                  "str": "tree_id"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "relpersistence": "p",
    "location": 17840
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_UNIQUE",
            "conname": "tree_tree_num_key",
            "location": 17860,
            "keys": [
              {
                "String": {
                  "str": "tree_num"
                }
              }
            ]
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreateTrigStmt
{
  "trigname": "account_tree_change_last_modified_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 18103
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "change_last_modified"
      }
    }
  ],
  "row": true,
  "timing": 2,
  "events": 16
}

// CreateTrigStmt
{
  "trigname": "create_new_account_api_key_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 18359
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "create_new_account_api_key"
      }
    }
  ],
  "row": true,
  "events": 4
}

// CreateTrigStmt
{
  "trigname": "meter_limit_checker_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 18601
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "meter_limit_checker"
      }
    }
  ],
  "row": true,
  "timing": 2,
  "events": 4
}

// CreateTrigStmt
{
  "trigname": "new_account_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 18820
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "new_account"
      }
    }
  ],
  "row": true,
  "timing": 2,
  "events": 4
}

// CreateTrigStmt
{
  "trigname": "new_tree_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 19024
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "new_tree"
      }
    }
  ],
  "row": true,
  "timing": 2,
  "events": 4
}

// CreateTrigStmt
{
  "trigname": "tree_change_last_modified_trigger",
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 19256
  },
  "funcname": [
    {
      "String": {
        "str": "public"
      }
    },
    {
      "String": {
        "str": "change_last_modified"
      }
    }
  ],
  "row": true,
  "timing": 2,
  "events": 16
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_api_key",
    "relpersistence": "p",
    "location": 19466
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "account_api_key_account_id_fkey",
            "location": 19497,
            "pktable": {
              "schemaname": "public",
              "relname": "account",
              "inh": true,
              "relpersistence": "p",
              "location": 19576
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "relpersistence": "p",
    "location": 19743
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "account_endpoint_account_id_fkey",
            "location": 19775,
            "pktable": {
              "schemaname": "public",
              "relname": "account",
              "inh": true,
              "relpersistence": "p",
              "location": 19855
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "relpersistence": "p",
    "location": 20023
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "account_endpoint_endpoint_id_fkey",
            "location": 20055,
            "pktable": {
              "schemaname": "public",
              "relname": "endpoint",
              "inh": true,
              "relpersistence": "p",
              "location": 20137
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "endpoint_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "endpoint_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "relpersistence": "p",
    "location": 20298
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "account_tree_account_id_fkey",
            "location": 20326,
            "pktable": {
              "schemaname": "public",
              "relname": "account",
              "inh": true,
              "relpersistence": "p",
              "location": 20402
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "relpersistence": "p",
    "location": 20558
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "account_tree_tree_id_fkey",
            "location": 20586,
            "pktable": {
              "schemaname": "public",
              "relname": "tree",
              "inh": true,
              "relpersistence": "p",
              "location": 20656
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "tree_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "tree_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "endpoint",
    "relpersistence": "p",
    "location": 20807
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "endpoint_owner_account_id_fkey",
            "location": 20831,
            "pktable": {
              "schemaname": "public",
              "relname": "account",
              "inh": true,
              "relpersistence": "p",
              "location": 20915
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "owner_account_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "relpersistence": "p",
    "location": 21061
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "meter_endpoint_id_fkey",
            "location": 21082,
            "pktable": {
              "schemaname": "public",
              "relname": "endpoint",
              "inh": true,
              "relpersistence": "p",
              "location": 21153
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "endpoint_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "endpoint_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "relpersistence": "p",
    "location": 21296
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_AddConstraint",
        "def": {
          "Constraint": {
            "contype": "CONSTR_FOREIGN",
            "conname": "tree_owner_id_fkey",
            "location": 21316,
            "pktable": {
              "schemaname": "public",
              "relname": "account",
              "inh": true,
              "relpersistence": "p",
              "location": 21380
            },
            "fk_attrs": [
              {
                "String": {
                  "str": "owner_id"
                }
              }
            ],
            "pk_attrs": [
              {
                "String": {
                  "str": "account_id"
                }
              }
            ],
            "fk_matchtype": "s",
            "fk_upd_action": "a",
            "fk_del_action": "a",
            "initially_valid": true
          }
        },
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 21499
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "account_access",
  "table": {
    "schemaname": "public",
    "relname": "account",
    "inh": true,
    "relpersistence": "p",
    "location": 21660
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 21678
      }
    }
  ],
  "qual": {
    "A_Expr": {
      "kind": "AEXPR_OP",
      "name": [
        {
          "String": {
            "str": "="
          }
        }
      ],
      "lexpr": {
        "ColumnRef": {
          "fields": [
            {
              "String": {
                "str": "account_id"
              }
            }
          ],
          "location": 21695
        }
      },
      "rexpr": {
        "FuncCall": {
          "funcname": [
            {
              "String": {
                "str": "public"
              }
            },
            {
              "String": {
                "str": "auth_account_id"
              }
            }
          ],
          "location": 21708
        }
      },
      "location": 21706
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 21835
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "account_api_key_access",
  "table": {
    "schemaname": "public",
    "relname": "account_api_key",
    "inh": true,
    "relpersistence": "p",
    "location": 22028
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 22054
      }
    }
  ],
  "qual": {
    "A_Expr": {
      "kind": "AEXPR_OP",
      "name": [
        {
          "String": {
            "str": "="
          }
        }
      ],
      "lexpr": {
        "ColumnRef": {
          "fields": [
            {
              "String": {
                "str": "account_id"
              }
            }
          ],
          "location": 22071
        }
      },
      "rexpr": {
        "FuncCall": {
          "funcname": [
            {
              "String": {
                "str": "public"
              }
            },
            {
              "String": {
                "str": "auth_account_id"
              }
            }
          ],
          "location": 22084
        }
      },
      "location": 22082
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 22212
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "account_endpoint_access",
  "table": {
    "schemaname": "public",
    "relname": "account_endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 22409
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 22436
      }
    }
  ],
  "qual": {
    "A_Expr": {
      "kind": "AEXPR_OP",
      "name": [
        {
          "String": {
            "str": "="
          }
        }
      ],
      "lexpr": {
        "ColumnRef": {
          "fields": [
            {
              "String": {
                "str": "account_id"
              }
            }
          ],
          "location": 22453
        }
      },
      "rexpr": {
        "FuncCall": {
          "funcname": [
            {
              "String": {
                "str": "public"
              }
            },
            {
              "String": {
                "str": "auth_account_id"
              }
            }
          ],
          "location": 22466
        }
      },
      "location": 22464
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 22590
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "account_tree_access",
  "table": {
    "schemaname": "public",
    "relname": "account_tree",
    "inh": true,
    "relpersistence": "p",
    "location": 22771
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 22794
      }
    }
  ],
  "qual": {
    "A_Expr": {
      "kind": "AEXPR_OP",
      "name": [
        {
          "String": {
            "str": "="
          }
        }
      ],
      "lexpr": {
        "ColumnRef": {
          "fields": [
            {
              "String": {
                "str": "account_id"
              }
            }
          ],
          "location": 22811
        }
      },
      "rexpr": {
        "FuncCall": {
          "funcname": [
            {
              "String": {
                "str": "public"
              }
            },
            {
              "String": {
                "str": "auth_account_id"
              }
            }
          ],
          "location": 22824
        }
      },
      "location": 22822
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 22944
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "endpoint_access",
  "table": {
    "schemaname": "public",
    "relname": "endpoint",
    "inh": true,
    "relpersistence": "p",
    "location": 23109
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 23128
      }
    }
  ],
  "qual": {
    "BoolExpr": {
      "boolop": "OR_EXPR",
      "args": [
        {
          "ColumnRef": {
            "fields": [
              {
                "String": {
                  "str": "official"
                }
              }
            ],
            "location": 23145
          }
        },
        {
          "ColumnRef": {
            "fields": [
              {
                "String": {
                  "str": "public"
                }
              }
            ],
            "location": 23157
          }
        },
        {
          "A_Expr": {
            "kind": "AEXPR_OP",
            "name": [
              {
                "String": {
                  "str": "="
                }
              }
            ],
            "lexpr": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "owner_account_id"
                    }
                  }
                ],
                "location": 23168
              }
            },
            "rexpr": {
              "FuncCall": {
                "funcname": [
                  {
                    "String": {
                      "str": "public"
                    }
                  },
                  {
                    "String": {
                      "str": "auth_account_id"
                    }
                  }
                ],
                "location": 23187
              }
            },
            "location": 23185
          }
        }
      ],
      "location": 23154
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 23305
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "meter_access",
  "table": {
    "schemaname": "public",
    "relname": "meter",
    "inh": true,
    "relpersistence": "p",
    "location": 23458
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 23474
      }
    }
  ],
  "qual": {
    "A_Expr": {
      "kind": "AEXPR_OP",
      "name": [
        {
          "String": {
            "str": "="
          }
        }
      ],
      "lexpr": {
        "ColumnRef": {
          "fields": [
            {
              "String": {
                "str": "account_id"
              }
            }
          ],
          "location": 23491
        }
      },
      "rexpr": {
        "FuncCall": {
          "funcname": [
            {
              "String": {
                "str": "public"
              }
            },
            {
              "String": {
                "str": "auth_account_id"
              }
            }
          ],
          "location": 23504
        }
      },
      "location": 23502
    }
  }
}

// AlterTableStmt
{
  "relation": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 23620
  },
  "cmds": [
    {
      "AlterTableCmd": {
        "subtype": "AT_EnableRowSecurity",
        "behavior": "DROP_RESTRICT"
      }
    }
  ],
  "relkind": "OBJECT_TABLE"
}

// CreatePolicyStmt
{
  "policy_name": "tree_access",
  "table": {
    "schemaname": "public",
    "relname": "tree",
    "inh": true,
    "relpersistence": "p",
    "location": 23769
  },
  "cmd_name": "all",
  "permissive": true,
  "roles": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 23784
      }
    }
  ],
  "qual": {
    "BoolExpr": {
      "boolop": "OR_EXPR",
      "args": [
        {
          "ColumnRef": {
            "fields": [
              {
                "String": {
                  "str": "public"
                }
              }
            ],
            "location": 23801
          }
        },
        {
          "A_Expr": {
            "kind": "AEXPR_OP",
            "name": [
              {
                "String": {
                  "str": "="
                }
              }
            ],
            "lexpr": {
              "ColumnRef": {
                "fields": [
                  {
                    "String": {
                      "str": "owner_id"
                    }
                  }
                ],
                "location": 23812
              }
            },
            "rexpr": {
              "FuncCall": {
                "funcname": [
                  {
                    "String": {
                      "str": "public"
                    }
                  },
                  {
                    "String": {
                      "str": "auth_account_id"
                    }
                  }
                ],
                "location": 23823
              }
            },
            "location": 23821
          }
        }
      ],
      "location": 23808
    }
  }
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_SCHEMA",
  "objects": [
    {
      "String": {
        "str": "public"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 23953
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_SCHEMA",
  "objects": [
    {
      "String": {
        "str": "super_api"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24070
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "account",
        "inh": true,
        "relpersistence": "p",
        "location": 24175
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24193
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "account_api_key",
        "inh": true,
        "relpersistence": "p",
        "location": 24306
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24332
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "account_endpoint",
        "inh": true,
        "relpersistence": "p",
        "location": 24446
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24473
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "account_tree",
        "inh": true,
        "relpersistence": "p",
        "location": 24583
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24606
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "tree",
        "inh": true,
        "relpersistence": "p",
        "location": 24708
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24723
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "endpoint",
        "inh": true,
        "relpersistence": "p",
        "location": 24829
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24848
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "meter",
        "inh": true,
        "relpersistence": "p",
        "location": 24951
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 24967
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "super_api",
        "relname": "account",
        "inh": true,
        "relpersistence": "p",
        "location": 25078
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25099
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "super_api",
        "relname": "meter",
        "inh": true,
        "relpersistence": "p",
        "location": 25208
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25227
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_SEQUENCE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "account_account_num_seq",
        "inh": true,
        "relpersistence": "p",
        "location": 25363
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    },
    {
      "AccessPriv": {
        "priv_name": "usage"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25397
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "pgmigrations",
        "inh": true,
        "relpersistence": "p",
        "location": 25507
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25530
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_SEQUENCE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "pgmigrations_id_seq",
        "inh": true,
        "relpersistence": "p",
        "location": 25662
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    },
    {
      "AccessPriv": {
        "priv_name": "usage"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25692
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_SEQUENCE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "public",
        "relname": "tree_tree_num_seq",
        "inh": true,
        "relpersistence": "p",
        "location": 25822
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    },
    {
      "AccessPriv": {
        "priv_name": "usage"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25850
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}

// GrantStmt
{
  "is_grant": true,
  "targtype": "ACL_TARGET_OBJECT",
  "objtype": "OBJECT_TABLE",
  "objects": [
    {
      "RangeVar": {
        "schemaname": "super_api",
        "relname": "account_api_key",
        "inh": true,
        "relpersistence": "p",
        "location": 25969
      }
    }
  ],
  "privileges": [
    {
      "AccessPriv": {
        "priv_name": "select"
      }
    }
  ],
  "grantees": [
    {
      "RoleSpec": {
        "roletype": "ROLESPEC_CSTRING",
        "rolename": "api_user",
        "location": 25998
      }
    }
  ],
  "behavior": "DROP_RESTRICT"
}
