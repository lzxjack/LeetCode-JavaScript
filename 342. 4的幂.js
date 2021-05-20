// 满足2的幂次方：1000..00
// 所以n&(n-1)=0

// 满足4的幂次方：1在奇数位置
// 这个数与01010101010101010101010101010101求，
// 如果结果是本身，则在奇数位置。否则不满足

const isPowerOfFour = n => {
    if (n === 1) return true;
    if (n < 4) return false;
    if ((n & (n - 1)) !== 0) return false;
    if ((n & 0x55555555) !== n) return false;
    return true;
};
