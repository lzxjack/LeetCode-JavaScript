const maxRotateFunction = nums => {
  const sum = nums.reduce((a, b) => a + b);
  const n = nums.length;
  let f = 0;
  for (let i = 0; i < n; i++) {
    f += i * nums[i];
  }

  let max = f;
  for (let i = 1; i < n; i++) {
    f += sum - n * nums[n - i];
    max = Math.max(max, f);
  }

  return max;
};
