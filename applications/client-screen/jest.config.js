module.exports = {
  coveragePathIgnorePatterns: ["libs/"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/spec", "<rootDir>/src"],
  setupFilesAfterEnv: [
    "<rootDir>/config/jest/setup/index.js",
  ],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  testMatch: ["**/?(*.)test.(ts|js)?(x)"],
  testTimeout: 20_000,
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "commonjs",
        },
        sourceMaps: true,
      },
    ],
  },
}
