import upperFirst from "../../src/upperFirst.js";

describe("upperFirst - Self Designed Test", () => {
    test("Should convert first letter to uppercase", () => {
        const result = upperFirst("hello");
        expect(result).toBe("Hello");
    });

    test("Should leave already uppercase string unchanged", () => {
        const result = upperFirst("HELLO");
        expect(result).toBe("HELLO");
    });

    test("Should conver a single letter string to uppercase", () => {
        const result = upperFirst("a");
        expect(result).toBe("A");
    });

    test("Should return empty string for null", () => {
        const result = upperFirst(null);
        expect(result).toBe("");
    });

    test("Should return empty string for undefined", () => {
        const result = upperFirst(undefined);
        expect(result).toBe("");
    });

    test("Should return empty string for empty string", () => {
        const result = upperFirst("");
        expect(result).toBe("");
    });

    test("Should return empty string for whitespace string", () => {
        const result = upperFirst("   ");
        expect(result).toBe("   ");
    });

    test("Should return empty string for number", () => {
        const result = upperFirst(123);
        expect(result).toBe("");
    });

    test("Should return string unchanged when first character is a digit", () => {
        const result = upperFirst("123d");
        expect(result).toBe("123d");
    });

    test("Should preserve rest of characters as is in string", () => {
        const result = upperFirst("hello World");
        expect(result).toBe("Hello World");
    });
});