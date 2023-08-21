const { isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz } = require('./fizzbuzz')

test('sanity check', () => {
    expect(2+2).toBe(4)
})

test('isFizzy returns true when n is divisible by 3', () => {
    expect(isFizzy(3)).toBe(true)
    expect(isFizzy(6)).toBe(true)
    expect(isFizzy(9)).toBe(true)
})

test('isBuzzy returns true when n is divisible by 5', () => {
    expect(isBuzzy(5)).toBe(true)
    expect(isBuzzy(10)).toBe(true)
    expect(isBuzzy(20)).toBe(true)
})

test('fizzyBuzzy returns approriate string when n is divisible by 3, 5, or both', () => {
    expect(fizzyBuzzy(3)).toBe('fizz')
    expect(fizzyBuzzy(5)).toBe('buzz')
    expect(fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzBuzz returns an object with fizz, buzz, and fizzbuzz properties', () => {
    expect(fizzBuzz(3)).toEqual({ count: 3, fizz: 1, buzz: 0, fizzBuzz: 0 })
    expect(fizzBuzz(5)).toEqual({  count: 5, fizz: 1, buzz: 1, fizzBuzz: 0 })
    expect(fizzBuzz(15)).toEqual({  count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 })
})