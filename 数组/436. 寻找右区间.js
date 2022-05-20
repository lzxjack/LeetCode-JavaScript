const findRightInterval = intervals => {
  const n = intervals.length;

  const starts = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    starts[i] = [intervals[i][0], i];
  }
  starts.sort((a, b) => a[0] - b[0]);

  const res = [];
  for (let i = 0; i < n; i++) {
    let [left, right] = [0, n - 1];
    let target = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (starts[mid][0] >= intervals[i][1]) {
        target = starts[mid][1];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res.push(target);
  }

  return res;
};
