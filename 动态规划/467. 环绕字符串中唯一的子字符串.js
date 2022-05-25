const findSubstringInWraproundString = p => {
  const dp = new Array(26).fill(0);
  let k = 0;
  for (let i = 0; i < p.length; i++) {
    if (i > 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1) {
      k++;
    } else {
      k = 1;
    }
    dp[p[i].charCodeAt() - 'a'.charCodeAt()] = Math.max(
      dp[p[i].charCodeAt() - 'a'.charCodeAt()],
      k
    );
  }

  return dp.reduce((a, b) => a + b);
};
