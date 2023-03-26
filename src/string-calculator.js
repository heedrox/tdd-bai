class StringCalculator {
    add(numbers) {
        const nums = numbers.split(",").map(Number)
        return nums.reduce((acc, curr) => acc + curr, 0)
    }

    substract(numbers) {
        const nums = numbers.split(",").map(Number)
        return nums.reduce((acc, curr) => acc - curr)
    }
}

module.exports = StringCalculator