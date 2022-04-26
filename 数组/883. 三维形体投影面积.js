const projectionArea = grid => {
  const n = grid.length;

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  for (let i = 0; i < n; i++) {
    let height2 = 0;
    let height3 = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) sum1++;
      height2 = Math.max(height2, grid[i][j]);
      height3 = Math.max(height3, grid[j][i]);
    }
    sum2 += height2;
    sum3 += height3;
  }

  return sum1 + sum2 + sum3;
};
