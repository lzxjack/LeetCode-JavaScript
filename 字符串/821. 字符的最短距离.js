const shortestToChar = (s, c) => {
  const n = s.length;
  const res = new Array(n).fill(0);

  let index = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) index = i;
    res[i] = Math.abs(i - index);
  }

  index = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) index = i;
    res[i] = Math.min(res[i], Math.abs(i - index));
  }

  return res;
};
