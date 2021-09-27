const numDecodings = s => {
    const MOD = 1000000007;
    const n = s.length;
    let [a, b, c] = [0, 1, 0];
    for (let i = 1; i <= n; i++) {
        c = (b * check1digit(s[i - 1])) % MOD;
        if (i > 1) {
            c = (c + a * check2digits(s[i - 2], s[i - 1])) % MOD;
        }
        a = b;
        b = c;
    }
    return c;
};

const check1digit = ch => {
    if (ch === '0') return 0;
    return ch === '*' ? 9 : 1;
};

const check2digits = (c0, c1) => {
    if (c0 === '*' && c1 === '*') return 15;

    if (c0 === '*') return c1.charCodeAt() <= '6'.charCodeAt() ? 2 : 1;

    if (c1 === '*') {
        if (c0 === '1') return 9;
        if (c0 === '2') return 6;
        return 0;
    }
    return c0 !== '0' &&
        (c0.charCodeAt() - '0'.charCodeAt()) * 10 + (c1.charCodeAt() - '0'.charCodeAt()) <= 26
        ? 1
        : 0;
};
