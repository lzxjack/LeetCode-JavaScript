const numEnclaves = grid => {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const dfs = (grid, row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0 || visited[row][col]) {
      return;
    }
    visited[row][col] = true;
    for (const dir of dirs) {
      dfs(grid, row + dir[0], col + dir[1]);
    }
  };

  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, n - 1);
  }
  for (let j = 1; j < n - 1; j++) {
    dfs(grid, 0, j);
    dfs(grid, m - 1, j);
  }
  let enclaves = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        enclaves++;
      }
    }
  }
  return enclaves;
};
