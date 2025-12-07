import upperFirst from '../../src/upperFirst.js';

describe('upperFirst - AI-generated Tests', () => {
  test('should convert first character to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('world')).toBe('World');
  });

  test('should leave already uppercase strings unchanged', () => {
    expect(upperFirst('FRED')).toBe('FRED');
    expect(upperFirst('HELLO')).toBe('HELLO');
  });

  test('should handle mixed case strings', () => {
    expect(upperFirst('camelCase')).toBe('CamelCase');
    expect(upperFirst('mixedCASE')).toBe('MixedCASE');
  });

  test('should handle empty strings', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(upperFirst('a')).toBe('A');
    expect(upperFirst('A')).toBe('A');
    expect(upperFirst('z')).toBe('Z');
  });

  test('should handle strings with numbers', () => {
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('abc123')).toBe('Abc123');
  });

  test('should handle strings starting with special characters', () => {
    expect(upperFirst('!hello')).toBe('!hello');
    expect(upperFirst('@world')).toBe('@world');
    expect(upperFirst('#test')).toBe('#test');
  });

  test('should handle strings with spaces', () => {
    expect(upperFirst(' hello')).toBe(' hello');
    expect(upperFirst('hello world')).toBe('Hello world');
  });

  test('should handle null and undefined', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
  });

  test('should handle string inputs only', () => {
    expect(upperFirst('123')).toBe('123');
    expect(upperFirst('true')).toBe('True');
    expect(upperFirst('false')).toBe('False');
  });

  test('should handle strings with Unicode characters', () => {
    expect(upperFirst('ñoño')).toBe('Ñoño');
    expect(upperFirst('café')).toBe('Café');
  });

  test('should handle whitespace-only strings', () => {
    expect(upperFirst('   ')).toBe('   ');
    expect(upperFirst('\t\n')).toBe('\t\n');
  });

  test('should handle very long strings', () => {
    const longString = 'a'.repeat(1000);
    const result = upperFirst(longString);
    expect(result[0]).toBe('A');
    expect(result.length).toBe(1000);
    expect(result.slice(1)).toBe('a'.repeat(999));
  });

  test('should handle strings with only uppercase letters', () => {
    expect(upperFirst('ABC')).toBe('ABC');
    expect(upperFirst('XYZ123')).toBe('XYZ123');
  });
});