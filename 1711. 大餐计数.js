const countPairs = deliciousness => {
    let res = 0;
    const mod = 1000000007;
    // 两数之和的最大值不超过deliciousness的最大值×2
    const MAX = Math.max(...deliciousness) * 2;
    const map = new Map();
    for (let i = 0; i < deliciousness.length; i++) {
        // j = j << 1 用来乘以2
        // 从1开始找相加等于2的幂的数
        for (let j = 1; j <= MAX; j = j << 1) {
            const num = map.get(j - deliciousness[i]) || 0;
            res = (res + num) % mod;
        }
        // 将当前数放入map
        map.set(deliciousness[i], (map.get(deliciousness[i]) || 0) + 1);
    }
    return res;
};
