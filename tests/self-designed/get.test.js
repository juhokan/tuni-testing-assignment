import get from "../../src/get.js";

describe("get - Self Designed Test", () => {
  test("Should return default value for undefined paths", () => {
    const object = { a: 1 };
    expect(get(object, "b", "default")).toBe("default");
  });

  test("Should return default value for undefined object", () => {
    expect(get(undefined, "a.b", "default")).toBe("default");
  })

  test("Should return default value for null object", () => {
    expect(get(null, "a.b", "default")).toBe("default");
  })

  test("Should return value for simple path", () => {
    const object = { a: 1 };
    expect(get(object, "a", "default")).toBe(1);
  });

  test("Should return value for nested path", () => {
    const object = { a: { b: 1 } };
    expect(get(object, "a.b", "default")).toBe(1);
  });

  test("Should return value for mixed path", () => {
    const object = { a: [{ b: { c: 1 } }], c: 2 };
    expect(get(object, "a[0].b.c", "default")).toBe(1);
    expect(get(object, "c", "default")).toBe(2);
  });

  test("Should return value for array path", () => {
    const object = { a: [1, 2, 3] };
    expect(get(object, "a.1", "default")).toBe(2);
  });
});