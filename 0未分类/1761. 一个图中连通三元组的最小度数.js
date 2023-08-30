const minTrioDegree = (n, edges) => {
  // 原图
  const g = Array(n)
    .fill(0)
    .map(() => new Set());
  // 定向后的图
  const h = Array(n)
    .fill(0)
    .map(() => new Array());
  const degree = Array(n).fill(0);

  for (const [x, y] of edges) {
    g[x - 1].add(y - 1);
    g[y - 1].add(x - 1);
    degree[x - 1]++;
    degree[y - 1]++;
  }
  for (const [x, y] of edges) {
    if (degree[x - 1] < degree[y - 1] || (degree[x - 1] == degree[y - 1] && x < y)) {
      h[x - 1].push(y - 1);
    } else {
      h[y - 1].push(x - 1);
    }
  }

  let ans = Infinity;
  for (let i = 0; i < n; ++i) {
    for (const j of h[i]) {
      for (const k of h[j]) {
        if (g[i].has(k)) {
          ans = Math.min(ans, degree[i] + degree[j] + degree[k] - 6);
        }
      }
    }
  }

  return ans === Infinity ? -1 : ans;
};
