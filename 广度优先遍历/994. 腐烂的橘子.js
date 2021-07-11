const orangesRotting = grid => {
    // 当前腐烂的橘子位置
    let nowRottenOranges = [];

    // 当前未腐烂的橘子位置
    const freshOrange = new Set();

    // 设置横纵坐标
    const M = grid.length;
    const N = grid[0].length;

    // 遍历数组，先查找
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                freshOrange.add(`${i}|${j}`);
            } else if (grid[i][j] === 2) {
                nowRottenOranges.push([i, j]);
            }
        }
    }

    // 设置结果
    let result = 0;

    // 广度优先搜索
    while (nowRottenOranges.length) {
        // 下一分钟会腐烂的橘子
        const nextRottenOranges = [];

        // 遍历当前腐烂的橘子，进行感染
        for (let i = 0; i < nowRottenOranges.length; i++) {
            // 获取横纵坐标 m/n
            const [m, n] = nowRottenOranges[i];

            if (freshOrange.has(`${m}|${n}`)) {
                freshOrange.delete(`${m}|${n}`);
            }

            // 向上感染
            if (grid[m - 1] && grid[m - 1][n] === 1) {
                // 先感染当前坐标
                grid[m - 1][n] = 2;
                nextRottenOranges.push([m - 1, n]);
            }

            // 向下感染
            if (grid[m + 1] && grid[m + 1][n] === 1) {
                // 先感染当前坐标
                grid[m + 1][n] = 2;
                nextRottenOranges.push([m + 1, n]);
            }

            // 向左感染
            if (grid[m][n - 1] === 1) {
                // 先感染当前坐标
                grid[m][n - 1] = 2;
                nextRottenOranges.push([m, n - 1]);
            }

            // 向右感染
            if (grid[m][n + 1] === 1) {
                // 先感染当前坐标
                grid[m][n + 1] = 2;
                nextRottenOranges.push([m, n + 1]);
            }
        }

        // 如果有下一次感染的，分钟 + 1
        if (nextRottenOranges.length) {
            result++;
        }

        // 下一分钟腐烂的和当前的交接，下次遍历
        nowRottenOranges = nextRottenOranges;
    }

    return freshOrange.size ? -1 : result;
};
