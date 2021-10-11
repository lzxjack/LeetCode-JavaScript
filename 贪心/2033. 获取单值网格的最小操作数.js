const minOperations = (grid, x) => {
    // 行、列
    const [m, n] = [grid.length, grid[0].length];
    // 如果只有一个元素，返回0
    if (m === 1 && n === 1) return 0;
    // 将网格扁平化
    const nums = [];
    for (let i = 0; i < m; i++) {
        nums.push(...grid[i]);
    }
    // 升序排序
    nums.sort((a, b) => a - b);
    const numsLen = nums.length;
    // 中位数
    const num = nums[numsLen >> 1];
    let res = 0;
    for (let i = 0; i < numsLen; i++) {
        // 当前数和中位数的差值
        const gap = nums[i] - num;
        // 某个差值不是x的倍数，则不能完成操作
        if (gap % x) return -1;
        // 累加上步骤次数
        res += (gap > 0 ? gap : -gap) / x;
    }
    return res;
};
