const plusOne = digits => {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // 当前数小于9，加一即可
            digits[i]++;
            return digits;
        } else if (i > 0 && digits[i] === 9) {
            // 当前数为9，且不是最高位，置零
            digits[i] = 0;
        } else if (i === 0 && digits[i] === 9) {
            // 当前数为9，且是最高位，置零，并多一个最高位1
            digits[i] = 0;
            digits.unshift(1);
            return digits;
        }
    }
};
