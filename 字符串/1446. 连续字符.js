const maxPower = s => {
    let max = 1;
    let count = 1;
    const len = s.length;
    for (let i = 1; i < len; i++) {
        if (s[i] === s[i - 1]) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
    return max;
};
