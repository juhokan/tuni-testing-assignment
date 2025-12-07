import filter from '../../src/filter.js';

describe('filter - AI-generated Tests', () => {
  test('should filter array elements based on predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, x => x > 3);
    expect(result).toEqual([4, 5]);
  });

  test('should handle empty arrays', () => {
    const result = filter([], x => x > 0);
    expect(result).toEqual([[]]);
  });

  test('should handle null/undefined arrays', () => {
    expect(filter(null, x => x)).toEqual([[]]);
    expect(filter(undefined, x => x)).toEqual([[]]);
  });

  test('should pass value, index, and array to predicate', () => {
    const array = ['a', 'b', 'c'];
    const calls = [];
    const mockPredicate = (value, index, arr) => {
      calls.push({ value, index, arr });
      return true;
    };
    filter(array, mockPredicate);
    
    expect(calls).toHaveLength(3);
    expect(calls[0]).toEqual({ value: 'a', index: 0, arr: array });
    expect(calls[1]).toEqual({ value: 'b', index: 1, arr: array });
    expect(calls[2]).toEqual({ value: 'c', index: 2, arr: array });
  });

  test('should filter objects correctly', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true }
    ]);
  });

  test('should return empty array when no elements match', () => {
    const array = [1, 2, 3];
    const result = filter(array, x => x > 10);
    expect(result).toEqual([[]]);
  });

  test('should return all elements when all match predicate', () => {
    const array = [2, 4, 6, 8];
    const result = filter(array, x => x % 2 === 0);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  test('should handle mixed data types', () => {
    const array = [0, 1, false, 2, '', 3];
    const result = filter(array, Boolean);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should not mutate original array', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    filter(original, x => x > 3);
    expect(original).toEqual(copy);
  });
});