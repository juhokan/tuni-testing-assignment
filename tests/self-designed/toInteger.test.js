import toInteger from "../../src/toInteger.js";

describe("toInteger - Self Designed Test", () => {
  test("Should convert decimal to integer", () => {
    const result = toInteger(1.2);
    expect(result).toBe(1);
  });

  test("Should convert string decimal to integer", () => {
    const result = toInteger("1.2");
    expect(result).toBe(1);
  });

  test("Should convert negative decimal to integer", () => {
    const result = toInteger(-1.2);
    expect(result).toBe(-1);
  });

  test("Should convert negative string to integer", () => {
    const result = toInteger("-1.2");
    expect(result).toBe(-1);
  });

  test("Should return 0 when null is provided", () => {
    const result = toInteger(null);
    expect(result).toBe(0);
  });

  test("Should return 0 when undefined is provided", () => {
    const result = toInteger(undefined);
    expect(result).toBe(0);
  });

  test("Should handle large numbers", () => {
    const result = toInteger(9007199254740991);
    expect(result).toBe(9007199254740991);
  });

  test("Should convert Infinity to MAX_SAFE_INTEGER equivalent", () => {
    const result = toInteger(Infinity);
    expect(result).toBe(1.7976931348623157e308);
  });

  test("Should convert negative Infinity", () => {
    const result = toInteger(-Infinity);
    expect(result).toBe(-1.7976931348623157e308);
  });

  test("Should return 0 for very small numbers", () => {
    const result = toInteger(Number.MIN_VALUE);
    expect(result).toBe(0);
  });
});
