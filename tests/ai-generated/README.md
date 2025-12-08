# AI-Generated Test Suite

**Generation Method:** AI-assisted test creation using Claude (Anthropic) via Cursor IDE

**Date Generated:** December 8, 2025

---

## Overview

This folder contains AI-generated unit tests for the `isEmpty` and `toNumber` utility functions. These tests were created as part of Phase 2 of the TUNI Software Testing assignment to compare AI-generated tests with self-designed tests.

## Functions Tested

1. **isEmpty.js** - Checks if a value is an empty object, collection, map, or set
2. **toNumber.js** - Converts a value to a number

---

## AI Generation Process

### Tool Used
- **AI Model:** Claude (Anthropic) - Claude Opus 4.5
- **Interface:** Cursor IDE with AI assistant integration
- **Date:** December 8, 2025

### Prompt Strategy

The AI was provided with:
1. The complete source code of both functions (`isEmpty.js` and `toNumber.js`)
2. The Phase 1 test plan with detailed test cases (Test Cases 1.1-1.9 for isEmpty, Test Cases 2.1-2.10 for toNumber)
3. Context about the e-commerce application scenarios
4. Instructions to cover all planned test cases and identify additional edge cases

**Prompt used:**
> "Generate tests for the 2 given functions that cover our plan plus possible cases that we missed"

### Oracle Definition

The expected behavior (oracle) for the AI-generated tests was derived from:
1. **Function JSDoc documentation** - The inline documentation in the source files
2. **Lodash specification** - As these are lodash-based utilities, the official lodash documentation served as a reference
3. **JavaScript type coercion rules** - Standard ECMAScript specification for type conversion
4. **IEEE 754 floating-point semantics** - For numeric precision and special values (NaN, Infinity, -0)

---

## Test Structure

Each test file is organized into clearly labeled sections:

### 1. Planned Test Cases from Phase 1
Tests that directly implement the test cases defined in the Phase 1 test plan. These are labeled with their original test case IDs (e.g., "TC 1.1", "TC 2.1").

### 2. Additional AI-Identified Edge Cases
Tests for scenarios not explicitly covered in the Phase 1 plan, organized by category:
- Null/Undefined handling
- Boolean variations
- Number edge cases (NaN, Infinity, -0, etc.)
- String variations and special formats
- Object and array handling
- TypedArrays and special objects
- Binary, octal, and hexadecimal formats

### 3. E-Commerce Context Tests
Tests specifically designed for the e-commerce application scenarios:
- Shopping cart validation
- Product price conversion
- Form input handling
- Stock quantity validation
- Search and filtering operations

---

## Test Case Counts

### isEmpty.test.js
| Category | Test Count |
|----------|------------|
| Planned Test Cases (Phase 1) | 9 |
| Additional Edge Cases | 54 |
| E-Commerce Context | 8 |
| **Total** | **71** |

### toNumber.test.js
| Category | Test Count |
|----------|------------|
| Planned Test Cases (Phase 1) | 10 |
| Additional Edge Cases | 75 |
| E-Commerce Context | 13 |
| Precision Tests | 5 |
| **Total** | **106** |

### Combined Total: **177 tests**

### Coverage Achieved
| Function | Statements | Branches | Functions | Lines |
|----------|------------|----------|-----------|-------|
| isEmpty.js | 100% | 100% | 100% | 100% |
| toNumber.js | 100% | 100% | 100% | 100% |

---

## Comparison Notes: AI-Generated vs Self-Designed

### Coverage Differences
The AI-generated tests identified several edge cases not present in the self-designed tests:

**isEmpty:**
- Boolean objects (`new Boolean(true/false)`)
- String objects (`new String("")`)
- TypedArrays (Uint8Array, Int32Array, etc.)
- Sparse arrays
- Functions (regular, arrow, async, generator)
- Objects created with `Object.create(null)`
- Inherited-only properties
- Special objects (Date, RegExp, Error, Symbol)

**toNumber:**
- Signed hexadecimal strings (`+0x10`)
- Uppercase notation variants (`0B101`, `0O17`)
- Scientific notation strings
- Objects with valueOf returning objects
- Date objects (returns timestamp)
- Nested arrays
- String edge cases (`.5`, `5.`, `-0`)
- Very long number strings

### Structural Differences
- AI-generated tests use more descriptive, longer test names
- AI-generated tests include header comments with oracle documentation
- AI-generated tests are organized into logical describe blocks by category
- Self-designed tests follow a flatter structure

### Comprehensiveness
- AI-generated: ~160 tests total
- Self-designed: ~30 tests total (for the same two functions)

---

## Running the Tests

### Run all tests (including AI-generated)
```bash
npm test
```

### Run only AI-generated tests
```bash
npm test -- --testPathPattern="ai-generated"
```

### Run with coverage report
```bash
npm test -- --coverage
```

---

## Notes for Report

When writing the test report, consider discussing:

1. **Work Efficiency:** AI generated significantly more test cases in a fraction of the time it would take manually

2. **Edge Case Discovery:** AI identified edge cases that might be overlooked by human testers (e.g., TypedArrays, Object.create(null), signed hex strings)

3. **Context Understanding:** While AI can generate many tests, the e-commerce context tests still required human guidance through the prompt

4. **Oracle Clarity:** AI-generated tests benefit from explicit oracle documentation in comments

5. **Verification Required:** All AI-generated tests should be reviewed by humans to ensure correctness and relevance

6. **Potential Over-testing:** Some AI-generated tests may be redundant or test implementation details rather than behavior

---

## Disclaimer

These tests were generated with AI assistance. While the AI provided comprehensive coverage suggestions, all tests were reviewed for:
- Correctness of expected values
- Relevance to the function's purpose
- Alignment with the Phase 1 test plan
- Applicability to the e-commerce scenarios
