module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/src/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-node',
  // A map from regular expressions to paths to transformers for TS files
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
