import isEmpty from '../../src/isEmpty.js';

describe('isEmpty - AI-generated Tests', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for primitive values', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  test('should handle empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should handle non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(' ')).toBe(false);
  });

  test('should handle empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should handle non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([null])).toBe(false);
  });

  test('should handle empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should handle non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty({ 0: 'a' })).toBe(false);
  });

  test('should handle Map objects', () => {
    expect(isEmpty(new Map())).toBe(true);
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  test('should handle Set objects', () => {
    expect(isEmpty(new Set())).toBe(true);
    const set = new Set();
    set.add('item');
    expect(isEmpty(set)).toBe(false);
  });

  test('should handle functions', () => {
    expect(isEmpty(() => {})).toBe(true);
    expect(isEmpty(function() {})).toBe(true);
  });
});