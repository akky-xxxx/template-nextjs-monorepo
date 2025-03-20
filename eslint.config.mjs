import eslintConfigSCAll from "eslint-config-sc-all"

import { CONFIG } from "./config/eslint/constants/CONFIG/index.mjs"
import { IGNORE_FOR_ROOT } from "./config/eslint/constants/IGNORE_FOR_ROOT/index.mjs"

export default [
  eslintConfigSCAll.getConfigs("javascript"),
  CONFIG,
  IGNORE_FOR_ROOT,
].flat()
