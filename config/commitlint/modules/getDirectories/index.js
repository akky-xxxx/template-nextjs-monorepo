const fs = require("fs")
const yaml = require("js-yaml")

const isDirectory = (path) => fs.statSync(path).isDirectory()

const convertToScopeName = (workspaceName) => {
  try {
    const directory2path = (directory) => `${workspaceName}/${directory}`
    const path2directory = (path) => path.replace(`${workspaceName}/`, "")
    return fs.readdirSync(workspaceName).map(directory2path).filter(isDirectory).map(path2directory)
  } catch {
    return undefined
  }
}

const workspaces = yaml.load(fs.readFileSync("pnpm-workspace.yaml")).packages
  .map((workspaceName) => `./${workspaceName.replace("/*", "")}`)
  .flatMap(convertToScopeName)
  .filter(Boolean)

const directories = [
  "*",
  "root",
  ...workspaces,
]

/**
 *
 * @returns {string[]}
 */
exports.getDirectories = () => directories
