import Account, { AccountInitializer } from "./Account"
import AccountApiKey, { AccountApiKeyInitializer } from "./AccountApiKey"
import AccountEndpoint, { AccountEndpointInitializer } from "./AccountEndpoint"
import AccountTree, { AccountTreeInitializer } from "./AccountTree"
import Tree, { TreeInitializer } from "./Tree"
import Endpoint, { EndpointInitializer } from "./Endpoint"
import Meter, { MeterInitializer } from "./Meter"
import Pgmigrations, { PgmigrationsInitializer } from "./Pgmigrations"

interface ModelTypeMap {
  account: Account
  account_api_key: AccountApiKey
  account_endpoint: AccountEndpoint
  account_tree: AccountTree
  tree: Tree
  endpoint: Endpoint
  meter: Meter
  pgmigrations: Pgmigrations
}

interface InitializerTypeMap {
  account: AccountInitializer
  account_api_key: AccountApiKeyInitializer
  account_endpoint: AccountEndpointInitializer
  account_tree: AccountTreeInitializer
  tree: TreeInitializer
  endpoint: EndpointInitializer
  meter: MeterInitializer
  pgmigrations: PgmigrationsInitializer
}

export type {
  ModelTypeMap,
  InitializerTypeMap,
  Account,
  AccountInitializer,
  AccountApiKey,
  AccountApiKeyInitializer,
  AccountEndpoint,
  AccountEndpointInitializer,
  AccountTree,
  AccountTreeInitializer,
  Tree,
  TreeInitializer,
  Endpoint,
  EndpointInitializer,
  Meter,
  MeterInitializer,
  Pgmigrations,
  PgmigrationsInitializer,
}
