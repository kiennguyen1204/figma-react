import type { Config } from '@jest/types';
const { compilerOptions } = require('../tsconfig.json');

const { pathsModuleMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsModuleMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' })
};

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'svg-jest',
    '.+\\.(css|png|webp|)$': 'jest-transform-stub'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // config to using methods of jest-dom library
  collectCoverage: true,
  coverageDirectory: 'coverage', // Custom folder name contain reports

  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*.config.ts',
    '!**/node_modules/**',
    '!**/mocks/**',
    '!**/constants/**',
    '!**/types/**',
    '!**/styles/**',
    '!src/main.tsx'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  }
};

export default config;
