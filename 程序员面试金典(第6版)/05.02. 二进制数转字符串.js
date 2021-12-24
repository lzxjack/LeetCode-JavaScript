const printBin = num => {
    const digits = [];
    while (num) {
        num *= 2;
        const digit = num >= 1 ? 1 : 0;
        digits.push(digit);
        if (digits.length > 32) return 'ERROR';
        num -= digit;
    }
    return `0.${digits.join('')}`;
};
