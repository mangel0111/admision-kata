import type { Config } from "@jest/types";

const jestConfig: Config.InitialOptions = {
  moduleFileExtensions: ["js", "json", "ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,js}",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/coverage/**",
    "!src/server.ts",
    "!src/app.ts",
    "!src/db.ts",
    "!jest.config.ts",
  ],
  transform: {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ["text", "text-summary"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/coverage/",
    "/jest.config.ts",
    "/src/server.ts",
    "/src/db.ts",
    "/src/app.ts",
  ],
};

export default jestConfig;
