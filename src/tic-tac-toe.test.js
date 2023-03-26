const { TicTacToe } = require('./tic-tac-toe.js');

describe('Tic tac toe', () => {
    test('exists', () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.start).toBeDefined()
    })
})