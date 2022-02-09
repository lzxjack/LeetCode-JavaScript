const simplifiedFractions = n => {
  // 使用set判断是否最简分数
  // 因为若不是最简，他们的比值之前肯定出现过
  const set = new Set();
  const isSimple = (a, b) => {
    // 比值出现过，不是最简
    if (set.has(a / b)) return false;
    set.add(a / b);
    // 是最简
    return true;
  };

  const res = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      // 暴力遍历，若是最简，放入res
      if (isSimple(j, i)) {
        res.push(`${j}/${i}`);
      }
    }
  }

  return res;
};
