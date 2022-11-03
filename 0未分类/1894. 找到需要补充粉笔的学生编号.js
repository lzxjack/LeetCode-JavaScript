const chalkReplacer = (chalk, k) => {
    const sum = chalk.reduce((a, b) => a + b);
    k %= sum;
    const len = chalk.length;
    let sumNew = 0;
    for (let i = 0; i < len; i++) {
        sumNew += chalk[i];
        if (sumNew > k) return i;
    }
};
