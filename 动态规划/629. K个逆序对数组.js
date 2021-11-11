const kInversePairs = (n, k) => {
    const MOD = 1000000007;
    const f = new Array(2).fill(0).map(() => new Array(k + 1).fill(0));
    f[0][0] = 1;
    for (let i = 1; i <= n; ++i) {
        for (let j = 0; j <= k; ++j) {
            const cur = i & 1,
                prev = cur ^ 1;
            f[cur][j] =
                (j - 1 >= 0 ? f[cur][j - 1] : 0) - (j - i >= 0 ? f[prev][j - i] : 0) + f[prev][j];
            if (f[cur][j] >= MOD) {
                f[cur][j] -= MOD;
            } else if (f[cur][j] < 0) {
                f[cur][j] += MOD;
            }
        }
    }
    return f[n & 1][k];
};
