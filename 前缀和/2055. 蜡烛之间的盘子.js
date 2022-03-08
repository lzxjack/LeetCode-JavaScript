const platesBetweenCandles = (s, queries) => {
  const n = s.length;
  const preSum = new Array(n).fill(0);

  // 处理盘子前缀和
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '*') {
      sum++;
    }
    preSum[i] = sum;
  }

  // -1左边的没有蜡烛
  let l = -1;
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (s[i] === '|') {
      l = i;
    }
    left[i] = l;
  }

  // -1右边的没有蜡烛
  let r = -1;
  const right = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '|') {
      r = i;
    }
    right[i] = r;
  }

  const res = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    const x = right[a]; // 离右边最近的盘子位置
    const y = left[b]; // 离左边最近的盘子位置
    res[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
  }

  return res;
};
