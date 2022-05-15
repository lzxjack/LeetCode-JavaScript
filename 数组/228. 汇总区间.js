const summaryRanges = nums => {
  const res = [];
  if (!nums.length) return res;

  let left = nums[0];
  let right = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 !== nums[i - 1]) {
      res.push(left === right ? `${left}` : `${left}->${right}`);
      left = nums[i];
      right = nums[i];
      continue;
    }
    if (i === nums.length - 1) {
      right = nums[i];
      res.push(left === right ? `${left}` : `${left}->${right}`);
      continue;
    }
    right = nums[i];
  }
  if (left === right) {
    res.push(`${left}`);
  }

  return res;
};
