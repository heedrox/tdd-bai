class BowlingGame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    let score = 0
    let rollIndex = 0
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isStrike(rollIndex)) {
        score += 10 + this.strikeBonus(rollIndex)
        rollIndex++
      } else if (this.isSpare(rollIndex)) {
        score += 10 + this.spareBonus(rollIndex)
        rollIndex += 2
      } else {
        score += this.sumOfBallsInFrame(rollIndex)
        rollIndex += 2
      }
    }
    return score
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10
  }

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
  }

  spareBonus(rollIndex) {
    return this.rolls[rollIndex + 2]
  }

  sumOfBallsInFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1]
  }
}

module.exports = { BowlingGame }