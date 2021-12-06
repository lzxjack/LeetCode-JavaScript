const findEvenNumbers = digits => {
    const res = [];
    const len = digits.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                if (i === j || i === k || k === j) continue;
                const num = digits[i] * 100 + digits[j] * 10 + digits[k];
                if (num >= 100 && !(num % 2)) {
                    res.push(num);
                }
            }
        }
    }
    res.sort((a, b) => a - b);
    return [...new Set(res)];
};
