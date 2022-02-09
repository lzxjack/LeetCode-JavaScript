const sortEvenOdd = nums => {
  const [odd, even] = [[], []];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }

  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      nums[i] = odd.shift();
    } else {
      nums[i] = even.shift();
    }
  }

  return nums;
};
