import test from "ava"
import getTreeFromSQL from "get-tree-from-sql"

test("getTreeFromSQL", async (t) => {
  const tree = getTreeFromSQL(`
    CREATE TABLE public.users (
      id serial PRIMARY KEY,
      name text NOT NULL
    );
    COMMENT ON COLUMN public.users.name IS E'@type: InjectedName';
  `)

  t.truthy(tree)
})
