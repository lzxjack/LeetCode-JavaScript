const countVowelPermutation = n => {
  const MOD = 1e9 + 7;
  let c = [1, 1, 1, 1, 1];

  for (let i = 2; i <= n; i++) {
    c = [
      (c[1] + c[2] + c[4]) % MOD,
      (c[0] + c[2]) % MOD,
      (c[1] + c[3]) % MOD,
      c[2] % MOD,
      (c[2] + c[3]) % MOD,
    ];
  }

  return c.reduce((a, k) => a + k, 0) % MOD;
};
