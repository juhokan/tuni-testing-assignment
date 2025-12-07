import every from "../../src/every.js";

describe("every - Self Designed Test", () => {
  test("Should return true for empty arrays", () => {
    expect(every([], x => x > 0)).toBe(true);
  });

  test("Should return true for null arrays", () => {
    expect(every(null, x => x > 0)).toBe(true);
  });

  test("Should return true for undefined arrays", () => {   
    expect(every(undefined, x => x > 0)).toBe(true);
  });
  
  test("Should return true when all array elements match the predicate", () => {
    expect(every([1, 2, 3], x => x > 0)).toBe(true);
  });

  test("Should return false when any array element fails the predicate", () => {
    expect(every([1, 2, 3], x => x > 1)).toBe(false);
  });

  test("Should return false when no array elements match the predicate", () => {
    expect(every([1, 2, 3], x => x > 3)).toBe(false);
  });
});