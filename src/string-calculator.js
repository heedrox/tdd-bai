class StringCalculator {
  add(numbers) {
    const nums = numbers.split(",");
    return nums.reduce((acc, curr) => acc + parseInt(curr), 0);
  }
}

module.exports = StringCalculator;