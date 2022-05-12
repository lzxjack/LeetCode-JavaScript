const minDeletionSize = strs => {
  const [m, n] = [strs.length, strs[0].length];

  let count = 0;

  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (strs[i][j] < strs[i - 1][j]) {
        count++;
        break;
      }
    }
  }

  return count;
};
