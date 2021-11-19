const integerReplacement = n => {
    const set = new Map();
    const dfs = n => {
        if (n === 1) return 0;

        if (!set.has(n)) {
            if (!(n % 2)) {
                // n偶数
                set.set(n, 1 + integerReplacement(n >> 1));
            } else {
                // n奇数
                set.set(
                    n,
                    2 + Math.min(integerReplacement((n + 1) / 2), integerReplacement((n - 1) / 2))
                );
            }
        }
        return set.get(n);
    };
    return dfs(n);
};
