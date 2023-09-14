module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testRegex: '((\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/docs/', '/jsdoc/', '/cypress/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  collectCoverage: false,
  // concurrency decreased (default: 5)
  maxConcurrency: 1,
  maxWorkers: "50%",
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleDirectories: ['node_modules', 'src'],
};
