const MOD = BigInt(1337);

// 获得x的n次幂
const pow = (x, n) => {
    let res = BigInt(1);
    while (n) {
        if (n % 2) {
            res = (res * BigInt(x)) % MOD;
        }
        x = (x * x) % MOD;
        n = n >> 1;
    }
    return res;
};

const superPow = (a, b) => {
    let ans = BigInt(1);
    const len = b.length;
    for (let i = len - 1; i >= 0; i--) {
        ans = (ans * pow(BigInt(a), b[i])) % MOD;
        a = pow(BigInt(a), 10);
    }
    return ans;
};
