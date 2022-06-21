const findFrequentTreeSum = root => {
  const map = new Map();
  let max = 0;

  const dfs = root => {
    if (!root) return 0;

    const sum = root.val + dfs(root.left) + dfs(root.right);

    map.set(sum, (map.get(sum) || 0) + 1);
    max = Math.max(max, map.get(sum));

    return sum;
  };

  dfs(root);

  const res = [];
  for (const [k, v] of map) {
    if (v === max) {
      res.push(k);
    }
  }

  return res;
};
