/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@styled/(.*)': '<rootDir>/styled/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@components/(.*)': '<rootDir>/components/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
