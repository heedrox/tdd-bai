const { BowlingGame } = require('./bowling-game.js')

// https://kata-log.rocks/bowling-game-kata
describe('Bowling game kata', () => {
    test('rolls', () => {
        const bowlingGame = new BowlingGame()
        expect(bowlingGame.roll).toBeDefined()
    })

    test('gets score', () => {
        const bowlingGame = new BowlingGame()
        expect(bowlingGame.score).toBeDefined()
    })
})