// const getSum = (a, b) => {
//     if (!b) return a;
//     return getSum(a ^ b, (a & b) << 1);
// };

// const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);

const getSum = (a, b) => {
    while (b) {
        // 进位
        const c = (a & b) << 1;
        // 不考虑进位的加法
        a ^= b;
        // 将进位赋值给b
        b = c;
    }
    return a;
};
