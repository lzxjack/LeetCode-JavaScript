const uniquePathsWithObstacles = obstacleGrid => {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = [];
    // dp数组初始化
    // 先让所有元素为0
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i].push(0);
        }
    }
    // 初始化两条边，若遇到障碍物
    // 则从障碍物开始，后面的都保持0
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }
    // 从左往右、从上到下遍历
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 遇到障碍，不执行当前操作，直接进入下一循环
            // 让障碍所在的dp[i][j]保持0
            if (obstacleGrid[i][j] === 1) {
                continue;
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
