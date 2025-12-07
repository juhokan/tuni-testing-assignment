import toString from "../../src/toString.js";

describe("toString - Self Designed Test", () => {
  test("Should return empty string for null", () => {
    const result = toString(null);
    expect(result).toBe("");
  });

  test("Should return empty string for undefined", () => {
    const result = toString(undefined);
    expect(result).toBe("");
  });

  test("Should convert number to string", () => {
    const result = toString(123);
    expect(result).toBe("123");
  });

  test("Should convert boolean to string", () => {
    const result = toString(true);
    expect(result).toBe("true");
  });

  test("Should convert array to string", () => {
    const result = toString([1, 2, 3]);
    expect(result).toBe("1,2,3");
  });

  test("Should convert object to string", () => {
    const result = toString({ a: 1, b: 2 });
    expect(result).toBe("[object Object]");
  });

  test("Should convert symbol to string", () => {
    const result = toString(Symbol("test"));
    expect(result).toBe("Symbol(test)");
  });

  test("Should convert -0 to string, retaining the sign", () => {
    const result = toString(-0);
    expect(result).toBe("-0");
  });

  test("Should convert Infinity to string", () => {
    const result = toString(Infinity);
    expect(result).toBe("Infinity");
  });
});