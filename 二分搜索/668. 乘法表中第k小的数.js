const findKthNumber = (m, n, k) => {
  let [left, right] = [1, m * n];

  while (left < right) {
    const x = left + Math.floor((right - left) / 2);
    let count = Math.floor(x / n) * n;
    for (let i = Math.floor(x / n) + 1; i <= m; ++i) {
      count += Math.floor(x / i);
    }
    if (count >= k) {
      right = x;
    } else {
      left = x + 1;
    }
  }

  return left;
};
