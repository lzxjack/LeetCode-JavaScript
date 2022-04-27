const pacificAtlantic = matrix => {
  if (!matrix || !matrix[0]) return [];

  const [m, n] = [matrix.length, matrix[0].length];

  const flow1 = new Array(m).fill(1).map(() => new Array(n).fill(false));
  const flow2 = new Array(m).fill(1).map(() => new Array(n).fill(false));

  // 深度优先遍历函数
  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1]
    ].forEach(([nr, nc]) => {
      if (
        // 保证在矩阵中
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // 防止死循环
        !flow[nr][nc] &&
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // 沿海岸线逆流而上
  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }

  const res = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
};
