const luckyNumbers = matrix => {
  const [m, n] = [matrix.length, matrix[0].length];
  const rowMin = [];
  const colMax = [];
  // 找出每行中最小的
  for (let i = 0; i < m; i++) {
    rowMin.push(Math.min(...matrix[i]));
  }
  // 找出每列中最大的
  for (let j = 0; j < n; j++) {
    let temp = matrix[0][j];
    for (let i = 1; i < m; i++) {
      temp = Math.max(temp, matrix[i][j]);
    }
    colMax.push(temp);
  }
  // 遍历矩阵，找出刚好是每行最小的、且每列最大的数
  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};
