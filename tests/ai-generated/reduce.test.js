import reduce from '../../src/reduce.js';

describe('reduce - AI-generated Tests', () => {
  test('should reduce array to sum with initial value', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  test('should reduce array without initial value', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).toBe(6);
  });

  test('should handle empty arrays with initial value', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  test('should handle single element arrays', () => {
    const result = reduce([5], (sum, n) => sum + n);
    expect(result).toBe(5);
  });

  test('should pass accumulator, value, index, and collection to iteratee', () => {
    const array = [1, 2, 3];
    const calls = [];
    const mockIteratee = (acc, val, index, arr) => {
      calls.push({ acc, val, index, arr });
      return acc + val;
    };
    reduce(array, mockIteratee, 0);
    
    expect(calls).toHaveLength(3);
    expect(calls[0]).toEqual({ acc: 0, val: 1, index: 0, arr: array });
    expect(calls[1]).toEqual({ acc: 1, val: 2, index: 1, arr: array });
    expect(calls[2]).toEqual({ acc: 3, val: 3, index: 2, arr: array });
  });

  test('should reduce objects to grouped values', () => {
    const obj = { a: 1, b: 2, c: 1 };
    const result = reduce(obj, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).toEqual({ '1': expect.arrayContaining(['a', 'c']), '2': ['b'] });
  });

  test('should handle arrays of objects', () => {
    const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
    const total = reduce(items, (sum, item) => sum + item.price, 0);
    expect(total).toBe(60);
  });

  test('should handle null/undefined collections', () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0);
  });

  test('should build complex data structures', () => {
    const words = ['apple', 'banana', 'apple', 'cherry'];
    const counts = reduce(words, (acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    expect(counts).toEqual({ apple: 2, banana: 1, cherry: 1 });
  });

  test('should work with string concatenation', () => {
    const words = ['Hello', ' ', 'World'];
    const sentence = reduce(words, (acc, word) => acc + word, '');
    expect(sentence).toBe('Hello World');
  });

  test('should find maximum value', () => {
    const numbers = [3, 7, 2, 9, 1];
    const max = reduce(numbers, (acc, val) => val > acc ? val : acc);
    expect(max).toBe(9);
  });
});