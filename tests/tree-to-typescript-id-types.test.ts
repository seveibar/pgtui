import test from "ava"
import treeToTypescriptModels from "../src/tree-to-typescript-models"

test("inferred typescript types for _id columns based on SQL column type (#23)", async (t) => {
  const dbTree: any = {
    schemas: {
      public: {
        name: "public",
        tables: {
          users: {
            name: "users",
            columns: [
              {
                name: "user_id",
                type: "int4",
                query: "user_id int4 NOT NULL",
                comments: [],
              },
              {
                name: "legacy_id",
                type: "bigint",
                query: "legacy_id bigint",
                comments: [],
              },
              {
                name: "account_id",
                type: "uuid",
                query: "account_id uuid NOT NULL",
                comments: [],
              },
              {
                name: "name",
                type: "text",
                query: "name text NOT NULL",
                comments: [],
              },
            ],
          },
        },
      },
    },
  }

  const generated = treeToTypescriptModels(dbTree)
  const usersFile = generated["./public/Users.ts"]

  t.truthy(usersFile)
  t.truthy(usersFile.includes("export type UserId = number"))
  t.truthy(usersFile.includes("export type LegacyId = number"))
  t.truthy(usersFile.includes("export type AccountId = string"))
  t.truthy(usersFile.includes("user_id: UserId"))
  t.truthy(usersFile.includes("legacy_id: LegacyId | null"))
  t.truthy(usersFile.includes("account_id: AccountId"))
})
