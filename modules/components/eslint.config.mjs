import eslintConfigSCAll from "eslint-config-sc-all"
import { IGNORE_FOR_HAPPY_CSS_MODULE } from "template-nextjs-monorepo/config/eslint/constants/IGNORE_FOR_HAPPY_CSS_MODULE/index.mjs"

export default [
  IGNORE_FOR_HAPPY_CSS_MODULE,
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),
].flat()
