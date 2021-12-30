/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
}
