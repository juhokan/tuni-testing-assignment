import toInteger from '../../src/toInteger.js';

describe('toInteger - AI-generated Tests', () => {
  test('should convert decimal numbers to integers', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(3.9)).toBe(3);
    expect(toInteger(-3.2)).toBe(-3);
    expect(toInteger(-3.9)).toBe(-3);
  });

  test('should return integers unchanged', () => {
    expect(toInteger(42)).toBe(42);
    expect(toInteger(0)).toBe(0);
    expect(toInteger(-42)).toBe(-42);
  });

  test('should handle special number values', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
    expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
  });

  test('should convert string numbers to integers', () => {
    expect(toInteger('3.2')).toBe(3);
    expect(toInteger('42')).toBe(42);
    expect(toInteger('-5.7')).toBe(-5);
  });

  test('should handle boolean values', () => {
    expect(toInteger(true)).toBe(1);
    expect(toInteger(false)).toBe(0);
  });

  test('should handle null and undefined', () => {
    expect(toInteger(null)).toBe(0);
    expect(toInteger(undefined)).toBe(0);
  });

  test('should handle NaN', () => {
    expect(toInteger(NaN)).toBe(0);
    expect(toInteger('invalid')).toBe(0);
  });

  test('should handle objects with valueOf', () => {
    expect(toInteger({ valueOf: () => 3.7 })).toBe(3);
    expect(toInteger({ valueOf: () => -2.9 })).toBe(-2);
  });

  test('should handle arrays', () => {
    expect(toInteger([3.5])).toBe(3);
    expect(toInteger([])).toBe(0);
  });

  test('should truncate towards zero', () => {
    expect(toInteger(3.9)).toBe(3);
    expect(toInteger(-3.9)).toBe(-3);
    expect(toInteger(0.9)).toBe(0);
    expect(toInteger(-0.9)).toBe(0);
  });

  test('should handle very large numbers', () => {
    expect(toInteger(1e20)).toBe(1e20);
    expect(toInteger(-1e20)).toBe(-1e20);
  });

  test('should handle edge cases', () => {
    expect(toInteger(0.1 + 0.2)).toBe(0); // Floating point precision
    expect(toInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });
});