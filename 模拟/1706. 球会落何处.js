const findBall = grid => {
  const res = [];
  const [m, n] = [grid.length, grid[0].length];
  for (let j = 0; j < n; j++) {
    let k = j;
    for (let i = 0; i < m; i++) {
      if (grid[i][k] === 1 && grid[i][k + 1] === -1) {
        k = -1;
        continue;
      } else if (grid[i][k] === -1 && grid[i][k - 1] === 1) {
        k = -1;
        continue;
      } else if (grid[i][k] === 1 && k === n - 1) {
        k = -1;
        continue;
      } else if (grid[i][k] === -1 && k === 0) {
        k = -1;
        continue;
      } else if (grid[i][k] === 1 && grid[i][k + 1] === 1) {
        k++;
      } else if (grid[i][k] === -1 && grid[i][k - 1] === -1) {
        k--;
      }
    }
    res.push(k);
  }
  return res;
};

const grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
console.log(findBall(grid));


