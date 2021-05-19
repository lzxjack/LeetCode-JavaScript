// 找阶乘后末尾0的数量 === 找5;

const trailingZeroes = n => {
    let count = 0;
    while (n >= 5) {
        count += (n / 5) | 0;
        n /= 5;
    }
    return count;
};
