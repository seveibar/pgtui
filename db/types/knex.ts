import { ModelTypeMap as PublicModelTypeMap } from "./public"

type PrefixedPublicModelTypeMap = {
  [K in keyof PublicModelTypeMap as `public.${K}`]: PublicModelTypeMap[K]
}

declare module "knex/types/tables" {
  interface Tables extends PrefixedPublicModelTypeMap {}
}
