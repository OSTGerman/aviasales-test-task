/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '@utils/(.*)': '<rootDir>/src/utils/$1',
    },
    collectCoverage: true,
    reporters: ['default', 'jest-junit'],
    coverageReporters: ['json', 'html', 'clover', 'lcov', 'text'],
    globalSetup: './global-setup.js'
};
