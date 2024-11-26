const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  preset: "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupJest.ts"
  ],
  testURL: "http://localhost",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!**/node_modules/**",
    "!**/typings.d.ts",
    "!**/main.ts",
    "!**/*module.ts",
    "!**/polyfills.ts",
    "!**/*types.ts",
    "!**/typings.d.ts",
    "!**/environments/environment*.ts",
    "!**/*routing.module.ts",
    "!src/polyfills.ts",
    "!src/app/tools/module-preloading-strategy.ts",
    "!src/jestGlobalMocks.ts"
  ],
  reporters: [
    "default",
    "jest-junit"
  ],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!adal-angular4)"
  ],
  verbose: false,
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: 'src/tsconfig.spec.json'
    },
  }
};
