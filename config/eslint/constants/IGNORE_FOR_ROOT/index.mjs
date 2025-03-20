import fs from "fs"
import yaml from "js-yaml"

const workspaces = yaml.load(fs.readFileSync("pnpm-workspace.yaml")).packages
  .map((packageName) => `${packageName}*`)

export const IGNORE_FOR_ROOT = {
  ignores: workspaces,
}
