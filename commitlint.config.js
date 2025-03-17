const { getDirectories } = require("./config/commitlint/modules/getDirectories")

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [0, "always"],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", getDirectories()],
    "type-enum": [
      2,
      "always",
      ["chore", "feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
  },
}
