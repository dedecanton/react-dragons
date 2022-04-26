import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  verbose: true,
  collectCoverageFrom: [
    "**/view/**",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/view/**/index.ts"
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
  },
};
export default config;
