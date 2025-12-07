import reduce from "../../src/reduce.js";

describe("reduce - Self Designed Test", () => {
  test("Should sum array of numbers with initial value", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  test("Should calculate product with initial value", () => {
    const result = reduce([1, 2, 3], (product, n) => product * n, 1);
    expect(result).toBe(6);
  });

  test("Should return initial value for empty array with initial value", () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  test("Should return undefined for empty array without initial value", () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).toBe(undefined);
  });

  test("Should return single element when array has one element without initial value", () => {
    const result = reduce([5], (sum, n) => sum + n);
    expect(result).toBe(5);
  });

  test("Should handle single element with initial value", () => {
    const result = reduce([5], (sum, n) => sum + n, 10);
    expect(result).toBe(15);
  });

  test("Should handle single element without initial value", () => {
    const result = reduce([5], (sum, n) => sum + n);
    expect(result).toBe(5);
  });

  test("Should handle complex accumulator for cart totals", () => {
    const cart = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
      { price: 20, quantity: 1 },
    ];
    const result = reduce(
      cart,
      (total, item) => total + item.price * item.quantity,
      0
    );
    expect(result).toBe(55);
  });

  test("Should reduce object properties", () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, value) => sum + value, 0);
    expect(result).toBe(6);
  });

  test("Should group items by property", () => {
    const result = reduce(
      [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
        { type: "vegetable", name: "carrot" },
      ],
      (acc, item) => {
        (acc[item.type] || (acc[item.type] = [])).push(item.name);
        return acc;
      },
      {}
    );
    expect(result).toEqual({
      fruit: ["apple", "banana"],
      vegetable: ["carrot"],
    });
  });

  test("Should handle null collection", () => {
    const result = reduce(null, (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });
});
