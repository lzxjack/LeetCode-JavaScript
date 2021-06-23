// 对于二进制数n：
// n = n & (n - 1) 可以去掉n最右边的一个1

const hammingWeight = n => {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};
