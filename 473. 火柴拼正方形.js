const makesquare = matchsticks => {
  const totalLen = matchsticks.reduce((a, b) => a + b);
  if (totalLen % 4) return false;

  matchsticks.sort((a, b) => b - a);
  const len = Math.floor(totalLen / 4);
  const edges = new Array(4).fill(0);

  const dfs = index => {
    if (index === matchsticks.length) {
      // 所有火柴被放置，可以构成正方形
      return true;
    }
    // 遍历四条边
    for (let i = 0; i < edges.length; i++) {
      // 当前边放入一个火柴
      edges[i] += matchsticks[index];
      if (edges[i] <= len && dfs(index + 1)) {
        return true;
      }
      // 上面遍历过，这根不满足，则拿走这根火柴
      edges[i] -= matchsticks[index];
    }
    return false;
  };

  return dfs(0);
};
