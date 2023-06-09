const base = require('../../jest.config.base.cjs')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...base,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
