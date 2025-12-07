import filter from "../../src/filter.js";

describe("filter - Self Designed Test", () => {
  test("Empty array should always return an empty array", () => {
    const array = [];
    const result = filter(array, (x) => x > 0);
    expect(result).toEqual([]);
  });

  test("Should filter array based on predicate", () => {
    const array = [1, 2, 3];
    const result = filter(array, (x) => x > 1);
    expect(result).toEqual([2, 3]);
  });

  test("Should return same array when all elements match the predicate", () => {
    const array = [1, 2, 3];
    const result = filter(array, (x) => x > 0);
    expect(result).toEqual([1, 2, 3]);
  });

  test("Should return an empty array when no elements match the predicate", () => {
    const array = [1, 2, 3];
    const result = filter(array, (x) => x < 1);
    expect(result).toEqual([]);
  });

  test("Should return empty array when non array is provided", () => {
    const notAnArray = "not an array";
    const result = filter(notAnArray, (x) => x > 0);
    expect(result).toEqual([]);
  });

  test("Should return empty array when array is null", () => {
    const result = filter(null, (x) => x > 0);
    expect(result).toEqual([]);
  });

  test("Should return empty array when array is undefined", () => {
    const result = filter(undefined, (x) => x > 0);
    expect(result).toEqual([]);
  });

  test("Should return array with values that match the predicate when a mix of types is provided", () => {
    const array = [null, undefined, 2, true, "", NaN];
    const result = filter(array, (x) => x === true);
    expect(result).toEqual([true]);
  });
});
