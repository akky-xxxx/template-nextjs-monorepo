import eslintConfigSCAll from "eslint-config-sc-all"
import { IGNORE_FOR_LIBS } from "template-nextjs-monorepo/config/eslint/constants/IGNORE_FOR_LIBS/index.mjs"

export default [
  IGNORE_FOR_LIBS,
  eslintConfigSCAll.getConfigs("typescript", ["jest"]),
].flat()
