const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const getMaximumGold = grid => {
  const m = grid.length,
    n = grid[0].length;
  let ans = 0;

  dfs = function (x, y) {
    if (x < 0 || y < 0 || x == m || y == n || grid[x][y] == 0) return 0;
    const cur = grid[x][y];
    let mx = 0;
    grid[x][y] = 0;
    for (const dir of DIRS) mx = Math.max(mx, dfs(x + dir[0], y + dir[1]));
    grid[x][y] = cur;
    return cur + mx;
  };

  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) ans = Math.max(ans, dfs(i, j));
  return ans;
};
