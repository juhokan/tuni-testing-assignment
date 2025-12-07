import map from "../../src/map.js";

describe("map - Self Designed Test", () => {
  test("Should return empty array for empty array", () => {
    const array = [];
    const result = map(array, (x) => x * 2);
    expect(result).toEqual([]);
  });

  test("Should return empty array for undefined array", () => {
    const result = map(undefined, (x) => x * 2);
    expect(result).toEqual([]);
  });

  test("Should return empty array for null array", () => {
    const result = map(null, (x) => x * 2);
    expect(result).toEqual([]);
  });

  test("Should transform array elements using iteratee function", () => { 
    const array = [1, 2, 3];
    const result = map(array, (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  test("Should extract property values from objects", () => {
    const users = [{ name: "Teemu", age: 30 }, { name: "Mikko", age: 25 }];
    const result = map(users, (user) => user.name);
    expect(result).toEqual(["Teemu", "Mikko"]);
  });
});