/**
 * Converts database into types similar to kanel.js
 *
 * There are a couple different types of files.
 *
 * Each schema has a subdirectory.
 *
 **/

import { DatabaseTree } from "lib/types"

export const treeToTypescriptModels = (
  db: DatabaseTree
): { [filePath: string]: string } => {
  const fileTree = {}

  for (const [schemaName, schema] of Object.entries(db.schemas)) {
    console.log({ schema })
  }

  return {}
}

export default treeToTypescriptModels
