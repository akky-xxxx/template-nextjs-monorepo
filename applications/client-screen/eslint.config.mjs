import eslintConfigSCAll from "eslint-config-sc-all"
import { IGNORE_FOR_HAPPY_CSS_MODULE } from "template-nextjs-monorepo/config/eslint/constants/IGNORE_FOR_HAPPY_CSS_MODULE/index.mjs"
import { IGNORE_FOR_LIBS } from "template-nextjs-monorepo/config/eslint/constants/IGNORE_FOR_LIBS/index.mjs"
import { IGNORE_FOR_NEXT_JS } from "template-nextjs-monorepo/config/eslint/constants/IGNORE_FOR_NEXT_JS/index.mjs"
import { MOCK } from "template-nextjs-monorepo/config/eslint/constants/MOCK/index.mjs"

export default [
  IGNORE_FOR_HAPPY_CSS_MODULE,
  IGNORE_FOR_LIBS,
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),
  IGNORE_FOR_NEXT_JS,
  MOCK,
].flat()
