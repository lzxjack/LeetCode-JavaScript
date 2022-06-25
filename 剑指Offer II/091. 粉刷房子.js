const minCost = costs => {
  const n = costs.length;
  let dp = new Array(3).fill(0);
  for (let j = 0; j < 3; j++) {
    dp[j] = costs[0][j];
  }
  for (let i = 1; i < n; i++) {
    const dpNew = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
      dpNew[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
    }
    dp = dpNew;
  }
  return parseInt(_.min(dp));
};
