/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/**
 * Note that to run integration tests, we need to run and provide in-memory databases for tests.
 */

module.exports = {
  displayName: 'integration tests',
  rootDir: '../',
  testMatch: ['<rootDir>/integration/**/*.+(spec|test).[jt]s'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8'
}
