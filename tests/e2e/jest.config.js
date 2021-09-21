/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/**
 * Note that to run e2e tests, we need to run serverless first.
 */

module.exports = {
  displayName: 'e2e tests',
  rootDir: '../',
  testMatch: ['<rootDir>/e2e/**/*.+(spec|test).[jt]s'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8'
}
