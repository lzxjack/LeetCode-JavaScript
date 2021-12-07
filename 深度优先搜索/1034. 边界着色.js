const colorBorder = (grid, row, col, color) => {
    const [m, n] = [grid.length, grid[0].length];
    const oldColor = grid[row][col];
    const visit = new Set();
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return true;
        const index = i * n + j;
        if (visit.has(index)) return false;
        if (grid[i][j] !== oldColor) return true;
        visit.add(index);
        let flag = false;
        if (dfs(i + 1, j)) flag = true;
        if (dfs(i, j + 1)) flag = true;
        if (dfs(i - 1, j)) flag = true;
        if (dfs(i, j - 1)) flag = true;
        if (flag) grid[i][j] = color;
        return false;
    };
    dfs(row, col);
    return grid;
};
