const pondSizes = land => {
    // 行列
    const [m, n] = [land.length, land[0].length];
    const dfs = (i, j) => {
        // 越界、遇到不是水，则停止遍历
        if (i < 0 || i >= m || j < 0 || j >= n || land[i][j]) return;
        // 当前标记为1，防止后面再次遍历到
        land[i][j] = 1;
        // 当前水域面积+1
        area++;
        // 向八个方向遍历
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i - 1, j - 1);
        dfs(i - 1, j + 1);
        dfs(i + 1, j + 1);
        dfs(i + 1, j - 1);
    };
    const res = [];
    let area = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 找到了水域，从水域开始，遍历
            if (!land[i][j]) {
                // 清空面积
                area = 0;
                dfs(i, j);
                // 遍历完将面积放入res
                res.push(area);
            }
        }
    }
    res.sort((a, b) => a - b);
    return res;
};
