export default {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/isEmpty.js',
    'src/filter.js',
    'src/every.js',
    'src/toNumber.js',
    'src/toInteger.js',
    'src/reduce.js',
    'src/map.js',
    'src/get.js',
    'src/upperFirst.js',
    'src/toString.js'
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 90,
      statements: 90
    }
  },
  testMatch: [
    '**/tests/**/*.test.js'
  ]
};