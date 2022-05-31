const makesquare = nums => {
  if (nums.length < 4) return false;

  let total = nums.reduce((i, x) => (x += i));
  if (total % 4) return false;

  nums.sort((a, b) => b - a);
  const SIDE = total / 4;
  if (nums[0] > SIDE) return false;

  let edges = [0, 0, 0, 0];
  const dfs = i => {
    if (i === nums.length) return true;
    for (let k = 0; k < 4; k++) {
      if (edges[k] + nums[i] > SIDE || (k && edges[k] === edges[k - 1])) continue;
      edges[k] += nums[i];
      if (dfs(i + 1)) return true;
      edges[k] -= nums[i];
    }
    return false;
  };

  return dfs(0);
};
