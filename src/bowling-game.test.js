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

    test('when all are rolled 0, scores 0', () => {
        const bowlingGame = new BowlingGame()
        for (let a=0; a<20; a++) {
            bowlingGame.roll(0)
        }
        expect(bowlingGame.score()).toEqual(0)
    })
})