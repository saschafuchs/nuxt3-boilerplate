import { describe, expect, test } from 'vitest'
import * as helper from '../utils/'

describe('last', () => {
  test('returns the last item in an array', () => {
    expect(helper.last([1, 2, 3])).toBe(3)
    expect(helper.last(['a', 'b', 'c'])).toBe('c')
  })
})

describe('lastProperty', () => {
  test('returns the last property of an object', () => {
    expect(helper.lastProperty({ a: 1, b: 2, c: 3 })).toBe(3)
    expect(helper.lastProperty({ x: 'hello', y: 'world' })).toBe('world')
  })
})

describe('prop', () => {
  test('extracts a property from an object', () => {
    const obj = { name: 'John', age: 30 }
    expect(helper.prop('name')(obj)).toBe('John')
    expect(helper.prop('age')(obj)).toBe(30)
  })
})

describe('equal', () => {
  test('checks if two numbers are equal', () => {
    expect(helper.equal(5)(5)).toBe(true)
    expect(helper.equal(5)(6)).toBe(false)
  })
})

describe('removeById', () => {
  test('removes the element with the given id from the list of elements', () => {
    const elements = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
    expect(elements.filter(helper.removeById('b'))).toEqual([{ id: 'a' }, { id: 'c' }])
  })
})

describe('isString', () => {
  test('checks if a value is a string', () => {
    expect(helper.isString('hello')).toBe(true)
    expect(helper.isString(5)).toBe(false)
  })
})

describe('isNull', () => {
  test('checks if a value is null', () => {
    expect(helper.isNull(null)).toBe(true)
    expect(helper.isNull(undefined)).toBe(false)
  })
})

describe('isNumber', () => {
  test('checks if a value is a number', () => {
    expect(helper.isNumber(5)).toBe(true)
    expect(helper.isNumber('5')).toBe(false)
  })
})

describe('isBoolean', () => {
  test('checks if a value is a boolean', () => {
    expect(helper.isBoolean(true)).toBe(true)
    expect(helper.isBoolean(1)).toBe(false)
  })
})

describe('isObject', () => {
  test('checks if a value is an object', () => {
    expect(helper.isObject({})).toBe(true)
    expect(helper.isObject(5)).toBe(false)
  })
})

describe('some', () => {
  test('returns true if any of the passed-in functions return true when called with a given value', () => {
    const isEven = (x: number) => x % 2 === 0
    const isPositive = (x: number) => x > 0
    expect(helper.some(isEven, isPositive)(5)).toBe(true)
    expect(helper.some(isEven, isPositive)(-5)).toBe(false)
  })
})

describe('oneOf', () => {
  test('returns true if a given value is one of the passed-in values', () => {
    expect(helper.oneOf(1, 2, 3)(2)).toBe(true)
    expect(helper.oneOf(1, 2, 3)(4)).toBe(false)
  })
})

describe('clamp', () => {
  test('clamps a number between a given minimum and maximum value', () => {
    expect(helper.clamp(0, 10)(5)).toBe(5)
    expect(helper.clamp(0, 10)(15)).toBe(10)
    expect(helper.clamp(0, 10)(-5)).toBe(0)
  })
})

describe('groupBy', () => {
  test('groups an array of objects by a given key', () => {
    const arr = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }]
    expect(helper.groupBy(arr, 'age')).toEqual({ 25: [{ name: 'Jane', age: 25 }], 30: [{ name: 'John', age: 30 }, { name: 'Bob', age: 30 }]})
  })
})

describe('objGetKeyByValue', () => {
  test('given an object and a value, returns the first key that maps to that value', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(helper.objGetKeyByValue(obj, 2)).toBe('b')
    expect(helper.objGetKeyByValue(obj, 4)).toBe(undefined)
  })
})

describe('closestNumber', () => {
  test('finds the number in an array that is closest to the given number', () => {
    expect(helper.closestNumber(5, [1, 10, 3, 4, 7, 6])).toBe(4)
    expect(helper.closestNumber(5, [10, 20, 30, 40])).toBe(10)
  })
})

describe('checkBetweenLength', () => {
  test('returns true if the length of the passed string is between min and max, inclusive', () => {
    expect(helper.checkBetweenLength(5, 10, 'hello')).toBe(true)
    expect(helper.checkBetweenLength(5, 10, 'hi')).toBe(false)
    expect(helper.checkBetweenLength(5, 10, 'hello world')).toBe(false)
  })
})

describe('findKeyInObj', () => {
  test('findKeyInObj should return the correct key', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const key = 'b'
    expect(helper.findKeyInObj(obj, key)).toEqual(key)
  })
})

describe('flattenObj', () => {
  test('flattenObj should flatten nested object', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
    expect(helper.flattenObj(obj)).toEqual({ a: 1, 'b-c': 2, 'b-d-e': 3 })
  })
  test('flattenObj should return the same object if not nested', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(helper.flattenObj(obj)).toEqual(obj)
  })
})

describe('deepMerge', () => {
  test('deepMerge should merge two objects correctly', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 3, c: 4 }
    expect(helper.deepMerge(target, source)).toEqual({ a: 1, b: 3, c: 4 })
  })
  test('deepMerge should merge nested objects correctly', () => {
    const target = { a: 1, b: { c: 2, d: 3 } }
    const source = { b: { c: 4 }, e: 5 }
    expect(helper.deepMerge(target, source)).toEqual({ a: 1, b: { c: 4, d: 3 }, e: 5 })
  })
})
