import isEmpty from "../../src/isEmpty.js";

describe("isEmpty - Self Designed Test", () => {
  test("Should return true when null is provided", () => {
    const result = isEmpty(null);
    expect(result).toBe(true);
  });

  test("Should return true when boolean is provided", () => {
    const result = isEmpty(true);
    expect(result).toBe(true);
  });

  test("Should return true when number is provided", () => {
    const result = isEmpty(1);
    expect(result).toBe(true);
  });

  test("Should return false when string is provided", () => {
    const result = isEmpty("abc");
    expect(result).toBe(false);
  });

  test("Should return false when object is provided", () => {
    const result = isEmpty({ a: 1 });
    expect(result).toBe(false);
  });

  test("Should return false when list is provided", () => {
    const result = isEmpty([1, 2, 3]);
    expect(result).toBe(false);
  });

  test("Should return true when empty list is provided", () => {
    const result = isEmpty([]);
    expect(result).toBe(true);
  });

  test("Should return true when empty object is provided", () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  test("Should return true when empty string is provided", () => {
    const result = isEmpty("");
    expect(result).toBe(true);
  });

  // Additional tests for Map and Set not addressed in the test report
  test("Should return true when empty Map is provided", () => {
    const result = isEmpty(new Map());
    expect(result).toBe(true);
  });

  test("Should return false when non-empty Map is provided", () => {
    const map = new Map();
    map.set("a", 1);
    const result = isEmpty(map);
    expect(result).toBe(false);
  });

  test("Should return true when empty Set is provided", () => {
    const result = isEmpty(new Set());
    expect(result).toBe(true);
  });

  test("Should return false when non-empty Set is provided", () => {
    const set = new Set();
    set.add(1);
    const result = isEmpty(set);
    expect(result).toBe(false);
  });

  test("Should return true when prototype object is provided", () => {
    const result = isEmpty(Object.prototype);
    expect(result).toBe(true);
  });
});
