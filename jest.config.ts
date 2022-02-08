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
    "!jest.config.ts",
  ],
  transform: {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
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
  ],
};

export default jestConfig;
