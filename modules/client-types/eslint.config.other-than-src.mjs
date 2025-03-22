import eslintConfigSCAll from "eslint-config-sc-all"
import { CONFIG } from "template-nextjs-monorepo/config/eslint/constants/CONFIG/index.mjs"

export default [
  eslintConfigSCAll.getConfigs("javascript"),
  CONFIG,
].flat()
