const longestDiverseString = (a, b, c) => {
  const res = [];
  const arr = [
    [a, 'a'],
    [b, 'b'],
    [c, 'c'],
  ];

  while (true) {
    arr.sort((a, b) => b[0] - a[0]);
    let hasNext = false;
    for (const [i, [c, ch]] of arr.entries()) {
      if (c <= 0) break;

      const m = res.length;
      if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
        continue;
      }

      hasNext = true;
      res.push(ch);
      arr[i][0]--;
      break;
    }
    if (!hasNext) break;
  }

  return res.join('');
};
