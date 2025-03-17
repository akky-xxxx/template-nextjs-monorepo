const fs = require("fs")
const yaml = require("js-yaml")

const workspaces = yaml.load(fs.readFileSync("pnpm-workspace.yaml")).packages
  .map((packageName) => `${packageName}*`)

module.exports = {
  version: "0.2",

  ignorePaths: ["node_modules/**", ...workspaces],
  language: "en",
}
