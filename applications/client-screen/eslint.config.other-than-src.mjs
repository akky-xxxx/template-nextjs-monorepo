import { CONFIG } from "template-nextjs-monorepo/config/eslint/constants/CONFIG/index.mjs"
import eslintConfigSCAll from "eslint-config-sc-all"

export default [
  eslintConfigSCAll.getConfigs("javascript"),
  CONFIG,
].flat()
