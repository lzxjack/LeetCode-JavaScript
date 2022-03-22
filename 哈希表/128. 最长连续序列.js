// X,x+1,x+2,...,x+y

// 若当前x不存在x-1，则开始遍历

const longestConsecutive = nums => {
  // set去重
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    // 若不包含num-1，则开始遍历
    if (!set.has(num - 1)) {
      let curNum = num;
      let curStreak = 1;

      while (set.has(curNum + 1)) {
        curNum++;
        curStreak++;
      }

      // 更新最长
      max = Math.max(max, curStreak);
    }
  }

  return max;
};
