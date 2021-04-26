let plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else if (i > 0 && digits[i] === 9) {
            digits[i] = 0;
        } else if (i === 0 && digits[i] === 9) {
            digits.length++;
            digits.fill(0);
            digits[0] = 1;
            return digits;
        }
    }
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
