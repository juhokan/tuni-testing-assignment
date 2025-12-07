import toNumber from '../../src/toNumber.js';

describe('toNumber - AI-generated Tests', () => {
  test('should return the same value for numbers', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(42)).toBe(42);
    expect(toNumber(-1)).toBe(-1);
  });

  test('should handle special number values', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(-Infinity)).toBe(-Infinity);
    expect(toNumber(NaN)).toBeNaN();
  });

  test('should convert string numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('42')).toBe(42);
    expect(toNumber('-5')).toBe(-5);
  });

  test('should handle whitespace in strings', () => {
    expect(toNumber(' 42 ')).toBe(42);
    expect(toNumber('\t3.14\n')).toBe(3.14);
  });

  test('should handle binary strings', () => {
    expect(toNumber('0b101')).toBe(5);
    expect(toNumber('0b1111')).toBe(15);
  });

  test('should handle octal strings', () => {
    expect(toNumber('0o10')).toBe(8);
    expect(toNumber('0o777')).toBe(511);
  });

  test('should handle hex strings', () => {
    expect(toNumber('0x123')).toBe(291);
    expect(toNumber('-0x123')).toBeNaN();
  });

  test('should convert booleans', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('should handle null and undefined', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('should handle symbols', () => {
    expect(toNumber(Symbol('test'))).toBeNaN();
  });

  test('should handle objects with valueOf', () => {
    expect(toNumber({ valueOf: () => 42 })).toBe(42);
  });

  test('should handle invalid strings', () => {
    expect(toNumber('abc')).toBeNaN();
    expect(toNumber('')).toBe(0);
  });
});