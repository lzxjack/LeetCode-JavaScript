const imageSmoother = img => {
  const [m, n] = [img.length, img[0].length];

  const presum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      presum[i + 1][j + 1] =
        presum[i + 1][j] + presum[i][j + 1] - presum[i][j] + img[i][j];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      const di = Math.max(0, i - 1),
        ui = Math.min(m, i + 2),
        dj = Math.max(0, j - 1),
        uj = Math.min(n, j + 2);
      ans[i][j] = Math.floor(
        (presum[ui][uj] - presum[ui][dj] - presum[di][uj] + presum[di][dj]) /
          ((ui - di) * (uj - dj))
      );
    }

  return ans;
};
