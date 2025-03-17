import eslintConfigSCAll from "eslint-config-sc-all"

import { CONFIG } from "./config/eslint/constants/CONFIG/index.mjs"

export default [
  eslintConfigSCAll.getConfigs("javascript"),
  CONFIG,
].flat()
