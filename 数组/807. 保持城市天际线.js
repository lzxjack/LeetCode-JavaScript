const maxIncreaseKeepingSkyline = grid => {
    // 初始化行、列天际线
    const row = [];
    const col = [];
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        // 列天际线：每行中的最大值
        row.push(Math.max(...grid[i]));
        let maxCol = -1;
        for (let j = 0; j < n; j++) {
            maxCol = maxCol > grid[j][i] ? maxCol : grid[j][i];
        }
        // 行天际线：每列中的最大值
        col.push(maxCol);
    }
    let res = 0;
    // 不影响天际线，每个元素最大只能增加到行、列天际线的最小值
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += Math.min(row[i], col[j]) - grid[i][j];
        }
    }
    return res;
};
