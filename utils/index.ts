/**
 * Returns the last item in an array.
 */
export const last = <T>(array: T[]): T => array[array.length - 1]

/**
 * This function returns the last property of an object
 */
export const lastProperty = (obj: object): object => Object.entries(obj).pop()?.[1]

/**
 * Returns a function that extracts a property from an object
 */
export const prop: <T, K extends keyof T>(k: K) => (obj: T) => T[K] = k => obj => obj[k]

/**
 * Returns true if x is equal to y and false otherwise
 */
export const equal: <T>(x: T) => (y: T) => boolean = x => y => x === y


/**
 * This function removes the element with the given id from the list of elements.
 */
export const removeById = (elementId: string) => ({ id }: { id: string }) => id !== elementId


/**
 * Checks if a value is a string.
 */
export const isString: (x: any) => boolean = x => typeof x === 'string'


/**
 * Checks if a value is null.
 */
export const isNull = (x: any): boolean => x === null

/**
 * Checks whether a value is a number
 */
export const isNumber = (x: any): boolean => typeof x === 'number'

/**
 * Returns true if x is a boolean, false otherwise
 */
export const isBoolean = (x: any) => typeof x === 'boolean'

/**
 * Checks if a given value is an object.
 */
export const isObject: (x: any) => boolean = x => typeof x === 'object'

/**
 * Returns true if any of the passed-in functions return true when called with the given value
 */
export const some = <T>(...fns: Array<(x: T) => boolean>): ((x: T) => boolean) => (x: T): boolean => fns.some(fn => fn(x))

/**
 * Returns a function that takes one argument and returns true if that argument
 */
export const oneOf = (...xs: any[]): (y: any) => boolean => y => !!xs.find(x => y === x)

/**
 * Returns a function that clamps a number between min and max
 */
export const clamp: (min: number, max: number) => (value: number) => number = (min, max) => value => value < min ? min : value > max ? max : value

/**
 * groupBy
 */
export const groupBy = (arr: any[], key: string) => {
  return arr.reduce((r: any, a: any) => {
    r[a[key]] = [...r[a[key]] || [], a]
    return r
  }, {})
}

/**
 * Given an object and a value, returns the first key that maps to that value.
 * If no such key exists, returns undefined.
 */
export const objGetKeyByValue = (obj: Record<string, string>, val: string): string | undefined => Object.keys(obj).find(key => obj[key] === val)

/**
 * Finds the number in an array that is closest to the given number.
 */
export const closestNumber = (val: number, arr: number[]) => arr.reduce((prev, curr) => Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev)

/**
 * Returns true if the length of the passed string is between min and max, inclusive.
 */
export const checkBetweenLength = (min: number, max: number, val: string) => new RegExp(`^.{${min},${max}}$`, 'gm').test(val)

/**
 * Finds the first key in an object that matches the given key
 */
export const findKeyInObj = (obj: { [key: string]: any }, key: string) => Object.keys(obj).find(val => val === key)

/**
 * flattenObj() takes an object with nested objects and flattens them into a single object.
 */
export const flattenObj = (obj: any, prefix = '', res: any = {}) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const k = `${prefix}${key}`
    if (typeof val === 'object') {
      flattenObj(val, `${k}-`, r)
    } else {
      res[k] = val
    }
    return r
  }, res)

/**
 * deepMerge returns the merged object.
 */
export const deepMerge = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], deepMerge(target[key], source[key]))
  }

  Object.assign(target || {}, source)
  return target
}
