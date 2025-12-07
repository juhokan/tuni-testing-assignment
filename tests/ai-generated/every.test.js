import every from '../../src/every.js';

describe('every - AI-generated Tests', () => {
  test('should return true when all elements pass predicate', () => {
    const array = [2, 4, 6, 8];
    expect(every(array, x => x % 2 === 0)).toBe(true);
  });

  test('should return false when any element fails predicate', () => {
    const array = [2, 4, 5, 8];
    expect(every(array, x => x % 2 === 0)).toBe(false);
  });

  test('should return true for empty arrays', () => {
    expect(every([], x => x > 10)).toBe(true);
  });

  test('should handle null/undefined arrays', () => {
    expect(every(null, x => x)).toBe(true);
    expect(every(undefined, x => x)).toBe(true);
  });

  test('should pass value, index, and array to predicate', () => {
    const array = [1, 2, 3];
    const calls = [];
    const mockPredicate = (value, index, arr) => {
      calls.push({ value, index, arr });
      return true;
    };
    every(array, mockPredicate);
    
    expect(calls).toHaveLength(3);
    expect(calls[0]).toEqual({ value: 1, index: 0, arr: array });
    expect(calls[1]).toEqual({ value: 2, index: 1, arr: array });
    expect(calls[2]).toEqual({ value: 3, index: 2, arr: array });
  });

  test('should stop iteration on first false result', () => {
    const array = [1, 2, 3, 4, 5];
    let callCount = 0;
    const mockPredicate = x => {
      callCount++;
      return x < 3;
    };
    const result = every(array, mockPredicate);
    
    expect(result).toBe(false);
    expect(callCount).toBe(3); // Should stop at index 2 (value 3)
  });

  test('should handle boolean predicate like Boolean constructor', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBe(true);
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    expect(every([false, 0, ''], Boolean)).toBe(false);
  });

  test('should handle complex objects', () => {
    const users = [
      { name: 'John', active: true },
      { name: 'Jane', active: true },
      { name: 'Bob', active: true }
    ];
    expect(every(users, user => user.active)).toBe(true);
    
    users[1].active = false;
    expect(every(users, user => user.active)).toBe(false);
  });

  test('should work with custom predicates', () => {
    const numbers = [10, 20, 30, 40];
    expect(every(numbers, x => x >= 10)).toBe(true);
    expect(every(numbers, x => x > 15)).toBe(false);
  });
});