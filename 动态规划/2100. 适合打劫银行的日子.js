const goodDaysToRobBank = (security, time) => {
  const n = security.length;

  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    // 左边非递增的数目
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
    // 右边非递减的数目
    if (security[n - i - 1] <= security[n - i]) {
      right[n - i - 1] = right[n - i] + 1;
    }
  }

  const res = [];
  for (let i = time; i < n - time; i++) {
    // 要满足左右两个条件
    if (left[i] >= time && right[i] >= time) {
      res.push(i);
    }
  }

  return res;
};
