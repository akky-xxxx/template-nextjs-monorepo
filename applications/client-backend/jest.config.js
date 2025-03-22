module.exports = {
  coveragePathIgnorePatterns: ["libs/"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/spec", "<rootDir>/src"],
  testMatch: ["**/?(*.)test.(ts|js)?"],
  testTimeout: 20_000,
  transform: {
    "^.+\\.ts$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
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
