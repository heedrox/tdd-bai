const StringCalculator = require('./string-calculator')

describe('String calculator', () => {
    test('must be a class', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator).toBeDefined()
    })
})
