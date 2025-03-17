export const CONFIG = [
  {
    files: ["commitlint.config.js"],
    rules: {
      "no-magic-numbers": 0,
    },
  },
  {
    files: [
      "eslint.config.mjs",
    ],
    rules: {
      "import/extensions": [
        2,
        {
          mjs: "always",
        },
      ],
      "import/no-default-export": 0,
      "import/no-extraneous-dependencies": 0,
    },
  },
  {
    files: ["config/eslint/**/*.mjs"],
    rules: {
      "no-magic-numbers": 0,
    },
  },
  {
    files: ["config/commitlint/modules/getDirectories/index.js"],
    rules: {
      "import/no-extraneous-dependencies": 0,
    },
  },
]
