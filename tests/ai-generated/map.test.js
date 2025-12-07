import map from '../../src/map.js';

describe('map - AI-generated Tests', () => {
  test('should map array elements using iteratee function', () => {
    const square = n => n * n;
    const result = map([4, 8], square);
    expect(result).toEqual([16, 64]);
  });

  test('should handle empty arrays', () => {
    const result = map([], x => x * 2);
    expect(result).toEqual([]);
  });

  test('should handle null/undefined arrays', () => {
    expect(map(null, x => x * 2)).toEqual([]);
    expect(map(undefined, x => x * 2)).toEqual([]);
  });

  test('should pass value, index, and array to iteratee', () => {
    const array = [10, 20, 30];
    const calls = [];
    const mockIteratee = (value, index, arr) => {
      calls.push({ value, index, arr });
      return value;
    };
    map(array, mockIteratee);
    
    expect(calls).toHaveLength(3);
    expect(calls[0]).toEqual({ value: 10, index: 0, arr: array });
    expect(calls[1]).toEqual({ value: 20, index: 1, arr: array });
    expect(calls[2]).toEqual({ value: 30, index: 2, arr: array });
  });

  test('should create new array without mutating original', () => {
    const original = [1, 2, 3];
    const originalCopy = [...original];
    const result = map(original, x => x * 2);
    
    expect(result).toEqual([2, 4, 6]);
    expect(original).toEqual(originalCopy);
  });

  test('should handle arrays with mixed data types', () => {
    const mixed = [1, 'hello', true, null];
    const result = map(mixed, x => typeof x);
    expect(result).toEqual(['number', 'string', 'boolean', 'object']);
  });

  test('should work with object transformation', () => {
    const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    const names = map(users, user => user.name);
    expect(names).toEqual(['John', 'Jane']);
  });

  test('should handle arrays with undefined/null elements', () => {
    const array = [1, undefined, 3, null, 5];
    const result = map(array, x => x ? x * 2 : 0);
    expect(result).toEqual([2, 0, 6, 0, 10]);
  });

  test('should maintain array length', () => {
    const array = [1, 2, 3, 4, 5];
    const result = map(array, x => x > 3 ? x : undefined);
    expect(result).toHaveLength(5);
    expect(result).toEqual([undefined, undefined, undefined, 4, 5]);
  });

  test('should work with index-based transformations', () => {
    const array = ['a', 'b', 'c'];
    const result = map(array, (item, index) => `${index}: ${item}`);
    expect(result).toEqual(['0: a', '1: b', '2: c']);
  });

  test('should handle complex iteratee functions', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = map(numbers, (n, i, arr) => n * arr.length + i);
    expect(result).toEqual([5, 11, 17, 23, 29]);
  });
});