const gridGame = grid => {
    const n = grid[0].length;
    // 分别计算两行的前缀和
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
        grid[1][j] += grid[1][j - 1];
    }
    let res = Infinity;
    // 机器人1任选一列j转弯
    for (let j = 0; j < n; j++) {
        // 机器人2肯定会走第一行j的右边和第二行j的左边的最大值
        // 机器人1要让这个最大值最小
        res = Math.min(res, Math.max(grid[0][n - 1] - grid[0][j], grid[1][j - 1] || 0));
    }
    return res;
};
