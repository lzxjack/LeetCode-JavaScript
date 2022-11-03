const islandPerimeter = grid => {
    // 行
    const m = grid.length;
    // 列
    const n = grid[0].length;

    // 计算某个点能贡献周长值的函数
    const getC = (i, j) => {
        // 先假设当前点能贡献的周长为4
        // 判断四周是否有值，若某条相邻边有值，减去1
        // 注意边界条件
        let c = 4;
        if (i - 1 >= 0 && grid[i - 1][j]) c--;
        if (j + 1 < n && grid[i][j + 1]) c--;
        if (i + 1 < m && grid[i + 1][j]) c--;
        if (j - 1 >= 0 && grid[i][j - 1]) c--;
        return c;
    };

    let res = 0;

    // 遍历每个点
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                // 如果该点有值，累加上该点能贡献的周长
                res += getC(i, j);
            }
        }
    }
    return res;
};
