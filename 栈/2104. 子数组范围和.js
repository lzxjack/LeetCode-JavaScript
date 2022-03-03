const subArrayRanges = nums => {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let minVal = Number.MAX_VALUE;
    let maxVal = -Number.MAX_VALUE;
    for (let j = i; j < n; j++) {
      minVal = Math.min(minVal, nums[j]);
      maxVal = Math.max(maxVal, nums[j]);
      res += maxVal - minVal;
    }
  }
  return res;
};
