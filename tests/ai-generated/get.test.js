import get from '../../src/get.js';

describe('get - AI-generated Tests', () => {
  test('should get nested object values with string path', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, 'a.b.c')).toBe(3);
  });

  test('should get nested array values with string path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, 'a.0.b.c')).toBe(3);
  });

  test('should get values with array path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    expect(get(object, ['a', 0, 'b', 'c'])).toBe(3);
  });

  test('should return default value for undefined paths', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, 'a.b.d', 'default')).toBe('default');
    expect(get(object, 'x.y.z', 42)).toBe(42);
  });

  test('should handle null/undefined objects', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle empty paths', () => {
    const object = { a: 1 };
    expect(get(object, '')).toBeUndefined();
    expect(get(object, [])).toBeUndefined();
  });

  test('should handle top-level properties', () => {
    const object = { name: 'John', age: 30 };
    expect(get(object, 'name')).toBe('John');
    expect(get(object, 'age')).toBe(30);
    expect(get(object, 'unknown')).toBeUndefined();
  });

  test('should handle arrays as root objects', () => {
    const array = [1, 2, { a: 3 }];
    expect(get(array, '0')).toBe(1);
    expect(get(array, '2.a')).toBe(3);
    expect(get(array, [2, 'a'])).toBe(3);
  });

  test('should handle special characters in property names', () => {
    const object = { 'key-with-dash': { 'nested key': 'value' } };
    expect(get(object, ['key-with-dash', 'nested key'])).toBe('value');
  });

  test('should handle numeric string properties', () => {
    const object = { '123': 'numeric key', '0': 'zero' };
    expect(get(object, '123')).toBe('numeric key');
    expect(get(object, '0')).toBe('zero');
  });

  test('should return undefined for paths that go through primitives', () => {
    const object = { a: 'string' };
    expect(typeof get(object, 'a.length.toString')).toBe('function');
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle deeply nested structures', () => {
    const object = { 
      level1: { 
        level2: { 
          level3: { 
            level4: { 
              value: 'deep' 
            } 
          } 
        } 
      } 
    };
    expect(get(object, 'level1.level2.level3.level4.value')).toBe('deep');
    expect(get(object, ['level1', 'level2', 'level3', 'level4', 'value'])).toBe('deep');
  });

  test('should handle mixed array and object nesting', () => {
    const object = { 
      users: [
        { name: 'John', roles: ['admin', 'user'] },
        { name: 'Jane', roles: ['user'] }
      ]
    };
    expect(get(object, 'users[0].name')).toBe('John');
    expect(get(object, 'users.1.roles.0')).toBe('user');
    expect(get(object, ['users', 0, 'roles', 1])).toBe('user');
  });
});