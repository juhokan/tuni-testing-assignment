import toString from '../../src/toString.js';

describe('toString - AI-generated Tests', () => {
  test('should return string values unchanged', () => {
    expect(toString('hello')).toBe('hello');
    expect(toString('123')).toBe('123');
    expect(toString('')).toBe('');
  });

  test('should convert null and undefined to strings', () => {
    expect(toString(null)).toBe('null');
    expect(toString(undefined)).toBe('undefined');
  });

  test('should preserve sign of -0', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString(0)).toBe('0');
  });

  test('should convert numbers to strings', () => {
    expect(toString(123)).toBe('123');
    expect(toString(-456)).toBe('-456');
    expect(toString(3.14)).toBe('3.14');
  });

  test('should convert booleans to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('should convert arrays to comma-separated strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString(['a', 'b', 'c'])).toBe('a,b,c');
    expect(toString([])).toBe('');
  });

  test('should handle nested arrays', () => {
    expect(toString([1, [2, 3], 4])).toBe('1,2,3,4');
    expect(toString([[1, 2], [3, 4]])).toBe('1,2,3,4');
  });

  test('should handle arrays with null/undefined elements', () => {
    expect(toString([1, null, 3])).toBe('1,,3');
    expect(toString([1, undefined, 3])).toBe('1,,3');
    expect(toString([null, undefined])).toBe(',');
  });

  test('should convert symbols using their toString method', () => {
    const sym = Symbol('test');
    expect(toString(sym)).toBe(sym.toString());
  });

  test('should handle objects', () => {
    expect(toString({})).toBe('[object Object]');
    expect(toString({ a: 1 })).toBe('[object Object]');
  });

  test('should handle functions', () => {
    const fn = function test() { return 42; };
    expect(toString(fn)).toContain('function test');
  });

  test('should handle dates', () => {
    const date = new Date('2023-01-01');
    expect(toString(date)).toBe(date.toString());
  });

  test('should handle special number values', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
    expect(toString(NaN)).toBe('NaN');
  });

  test('should handle very large numbers', () => {
    expect(toString(1e20)).toBe('100000000000000000000');
    expect(toString(Number.MAX_SAFE_INTEGER)).toBe('9007199254740991');
  });

  test('should handle complex nested structures', () => {
    const complex = [1, [2, [3, 4]], 5];
    expect(toString(complex)).toBe('1,2,3,4,5');
  });

  test('should handle mixed array types', () => {
    expect(toString([1, 'hello', true, null])).toBe('1,hello,true,');
    expect(toString(['a', 2, false, undefined])).toBe('a,2,false,');
  });

  test('should handle BigInt values', () => {
    const bigInt = BigInt(123);
    expect(toString(bigInt)).toBe('123');
  });

  test('should handle Error objects', () => {
    const error = new Error('test error');
    expect(toString(error)).toContain('Error: test error');
  });
});