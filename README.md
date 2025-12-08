# tuni-testing-assignment

Software Testing Assignment for course COMP.SE.200

## Overview

This project contains a utility library with various JavaScript functions and comprehensive test suites. The testing strategy includes both self-designed tests and AI-generated tests to ensure thorough code coverage and reliability.

## Project Structure

```
├── src/                    # Source code - utility functions
├── tests/
│   ├── self-designed/     # Manually written test cases
│   └── ai-generated/      # AI-assisted test cases
├── coverage/              # Test coverage reports
└── jest.config.js         # Jest configuration
```

## Setup

Install dependencies:
```bash
npm install
```

## Testing

Run tests:
```bash
npm test
```

Run tests with coverage report:
```bash
npm run test:coverage
```

Generate coverage and send to Coveralls:
```bash
npm run coverage
```

## Test Coverage

The project includes 12 test suites covering critical utility functions including:
- Data manipulation: `filter`, `map`, `reduce`, `get`
- Type checking: `isEmpty`, `every`
- Number utilities: `toNumber`, `toInteger`
- String utilities: `toString`, `upperFirst`

## CI/CD

Automated testing and coverage reporting is configured via GitHub Actions.

## License

MIT
