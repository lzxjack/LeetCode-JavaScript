const diStringMatch = s => {
  const n = s.length;
  let [min, max] = [0, n];

  const res = [];
  for (let i = 0; i <= n; i++) {
    if (s[i] === 'I') {
      res.push(min++);
    } else {
      res.push(max--);
    }
  }

  return res;
};
