const wordBreak = (s, wordDict) => {
  const n = s.length;
  const set = new Set(wordDict);
  // dp初始化，除了第一个，全为false
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  // 从1到n遍历s
  for (let i = 1; i <= n; i++) {
    // 当遍历到i时，再从0到i遍历
    for (let j = 0; j < i; j++) {
      // 当前i所处的子串是否是否可以，取决于分割点j
      // 对于分割点j，若[0,j]满足，且剩下的在wordDict中出现过，则当前[0,i]子串就满足
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        // 若当前[0,i]子串满足，就不用继续遍历当前子串的分割点了
        // 跳过，判断下一轮子串[0,i+1]
        break;
      }
    }
  }

  return dp[n];
};
