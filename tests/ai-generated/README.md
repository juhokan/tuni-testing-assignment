# AI-Generated Test Suite

**Approach:** AI-assisted test generation using Claude/Cursor AI

## Purpose

This test suite contains AI-generated unit tests for the **two functions pre-planned in Phase 1** of the assignment:

1. **isEmpty** - Checks if value is an empty object, collection, map, or set
2. **toNumber** - Converts value to a number

These tests are separate from the self-designed tests to allow comparison between human-designed and AI-generated test approaches.

## Test Generation Method

### Prompt Strategy

The AI was provided with:
1. The Phase 1 test plan containing specific test cases for each function
2. The source code of the functions to understand implementation details
3. Instructions to generate comprehensive Jest test suites

### Example Prompts Used

**For isEmpty:**
> "Generate Jest unit tests for the isEmpty function based on these test cases from our test plan: [test cases 1.1-1.9]. Also add additional edge cases you think are important."

**For toNumber:**
> "Generate Jest unit tests for the toNumber function based on these test cases from our test plan: [test cases 2.1-2.10]. Include edge cases for special values and error conditions."

## Test Case Coverage

### isEmpty (11 tests)
- Null and undefined handling
- Primitive values (boolean, number, NaN)
- Empty and non-empty strings
- Empty and non-empty arrays
- Empty and non-empty objects
- Map and Set objects
- Functions

### toNumber (14 tests)
- Number passthrough
- Special values (Infinity, NaN)
- String number conversion
- Whitespace handling
- Binary and octal string conversion
- Hexadecimal handling (including bad hex)
- Boolean conversion
- Null and undefined
- Symbol handling
- Objects with valueOf

## Oracle Used

The expected results were determined by:
1. The Phase 1 test plan specifications
2. Function documentation and JSDoc comments
3. Lodash library documentation (as the source is based on Lodash)

## Framework

- **Testing Framework**: Jest with ES modules support
- **Test Structure**: Describe blocks with individual test cases
- **Assertion Style**: Jest expect() matchers
