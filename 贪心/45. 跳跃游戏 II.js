const jump = nums => {
  // 当前跳跃的终点
  let end = 0;
  // 最远位置
  let max = 0;
  // 条约次数
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 更新能跳到的最远距离
    max = Math.max(max, i + nums[i]);
    // 若当前的i到达了当前跳跃的终点，则跳跃一次，跳跃到最远位置
    if (i === end) {
      end = max;
      count++;
    }
  }

  return count;
};
