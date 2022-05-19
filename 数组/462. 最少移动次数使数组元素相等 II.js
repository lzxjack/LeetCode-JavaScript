const minMoves2 = nums => {
  nums.sort((a, b) => a - b);
  const mid = nums[(0 + nums.length - 1) >> 1];

  let res = 0;
  for (const num of nums) {
    res += Math.abs(num - mid);
  }

  return res;
};
