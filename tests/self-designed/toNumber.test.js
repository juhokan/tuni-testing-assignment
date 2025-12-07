import toNumber from "../../src/toNumber.js";

describe("toNumber - Self Designed Test", () => {
  test("Should return number when float is provided", () => {
    const result = toNumber(3.2);
    expect(result).toBe(3.2);
  });

  test("Should return number when string is provided", () => {
    const result = toNumber("3.2");
    expect(result).toBe(3.2);
  });

  test("Should return number when binary is provided", () => {
    const result = toNumber("0b101");
    expect(result).toBe(5);
  });

  test("Should return number when octal is provided", () => {
    const result = toNumber("0o17");
    expect(result).toBe(15);
  });

  test("Should return number when string with leading whitespace is provided", () => {
    const result = toNumber(" 1");
    expect(result).toBe(1);
  });

  test("Should return number when boolean is provided", () => {
    const result = toNumber(true);
    expect(result).toBe(1);
  });

  test("Should return number when null is provided", () => {
    const result = toNumber(null);
    expect(result).toBe(0);
  });

  test("Should return NaN when bad hex is provided", () => {
    const result = toNumber("-0x123");
    expect(result).toBe(NaN);
  });

  test("Should return NaN when invalid string is provided", () => {
    const result = toNumber("hello");
    expect(result).toBe(NaN);
  });

  test("Should return number when empty string is provided", () => {
    const result = toNumber("");
    expect(result).toBe(0);
  });

  // Additional tests for symbol and object not addressed in the test report
  test("Should return NaN when symbol is provided", () => {
    const result = toNumber(Symbol("test"));
    expect(result).toBe(NaN);
  });

  test("Should return number when object with valueOf is provided", () => {
    const obj = { valueOf: () => 42 };
    const result = toNumber(obj);
    expect(result).toBe(42);
  });
});
