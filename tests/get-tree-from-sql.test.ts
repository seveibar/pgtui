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

test("works with domains", async (t) => {
  const tree = getTreeFromSQL(`
    CREATE DOMAIN payload_jsonb AS jsonb;
    CREATE TABLE public.events (
      id serial PRIMARY KEY,
      payload payload_jsonb NOT NULL
    );
  `)

  t.truthy(tree)
})

test("works with grants", async (t) => {
  const tree = getTreeFromSQL(`
    GRANT USAGE ON SCHEMA public TO api_user;
  `)

  t.truthy(tree)
})

test("works with rules", async (t) => {
  const tree = getTreeFromSQL(`
    CREATE RULE override_insert AS ON INSERT TO super_api.account_api_key DO INSTEAD (
      INSERT INTO public.account_api_key
      VALUES (NEW.*)
      RETURNING *
    );
  `)

  t.truthy(tree)
})
