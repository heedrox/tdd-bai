class StringCalculator {
  add(numbers) {
    const nums = numbers.split(",");
    return parseInt(nums[0]) + parseInt(nums[1]);
  }
}

module.exports = StringCalculator;