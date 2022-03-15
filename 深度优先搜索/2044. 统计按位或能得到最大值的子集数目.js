const countMaxOrSubsets = nums => {
  let [max, count] = [0, 0];
  const len = nums.length;

  // start是起点
  // orNum是 按位或 的值
  const dfs = (start, orNum) => {
    if (orNum === max) {
      count++;
    } else if (orNum > max) {
      max = orNum;
      count = 1;
    }
    for (let i = start; i < len; i++) {
      // 给下一级传入orNum | nums[i]
      dfs(i + 1, orNum | nums[i]);
    }
  };

  dfs(0, 0);
  return count;
};
