const missingRolls = (rolls, mean, n) => {
  const len = rolls.length;
  const sum = mean * (len + n);
  const missSum = sum - rolls.reduce((a, b) => a + b);

  if (missSum < n || missSum > 6 * n) {
    return [];
  }

  const a = Math.floor(missSum / n);
  const b = missSum % n;
  const res = new Array(n).fill(a);

  for (let i = 0; i < b; i++) {
    res[i]++;
  }

  return res;
};
