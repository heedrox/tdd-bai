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
    test('must add three numbers', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add("3,6,2")).toBe(11)
    })

    test('must substract two numbers', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.substract("5,2")).toBe(3)
    })

    test('must substract three numbers', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.substract("5,2,3")).toBe(0)
    })
})
