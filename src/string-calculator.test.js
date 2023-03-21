const StringCalculator = require('./string-calculator.js')

describe('String calculator', () => {
    test('must be a class', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator).toBeDefined()
    })
    test('must add two numbers', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add("2,5")).toBe(7)
    })
    test('must add two numbers', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add("3,6")).toBe(9)
    })
})
