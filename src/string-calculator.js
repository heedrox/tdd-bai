class StringCalculator {
  add(numbers) {
    const nums = numbers.split(",");
    return nums.reduce((acc, curr) => acc + parseInt(curr), 0);
  }

  substract(numbers) {
    const nums = numbers.split(",");
    return nums.reduce((acc, curr) => acc - parseInt(curr), parseInt(nums[0]) * 2);
  }
}

module.exports = StringCalculator;