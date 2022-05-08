const findDuplicates = nums => {
  const res = [];

  for (const num of nums) {
    const temp = Math.abs(num);
    if (nums[temp - 1] > 0) {
      // 若对应位置的那个数大于0，则代表temp没出现过
      // 使用负号，表示temp出现了一次
      nums[temp - 1] *= -1;
    } else {
      res.push(temp);
    }
  }

  return res;
};
