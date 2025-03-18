import eslintConfigSCAll from "eslint-config-sc-all"

export default [
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),
].flat()
