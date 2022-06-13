const findDiagonalOrder = mat => {
  const res = [];
  const [m, n] = [mat.length, mat[0].length];
  // 外层遍历次数
  const k = m + n - 1;

  // 是否翻转的标志
  let flag = false;
  for (let i = 0; i < k; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      // 遇到虚构的，跳过
      if (!mat[i - j] || mat[i - j][j] === undefined) continue;
      if (flag) {
        // 倒序
        temp.unshift(mat[i - j][j]);
      } else {
        // 正序
        temp.push(mat[i - j][j]);
      }
    }
    res.push(...temp);
    // 每遍历一次，下一次翻转
    flag = !flag;
  }

  return res;
};
