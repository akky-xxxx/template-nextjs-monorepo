export const CONFIG = [
  {
    files: ["cspell.config.js"],
    rules: {
      "import/no-extraneous-dependencies": 0,
    },
  },
  {
    files: ["commitlint.config.js"],
    rules: {
      "no-magic-numbers": 0,
    },
  },
  {
    files: [
      "eslint.config.mjs",
      "eslint.config.other-than-src.mjs",
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
      "unicorn/prevent-abbreviations": 0,
    },
  },
  {
    files: ["config/eslint/**/*.mjs"],
    rules: {
      "import/no-extraneous-dependencies": 0,
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
