// 1. 当前数的最小和 = 当前数 + min(左边数最小和，上边数最小和)
// 2. 特例：第一列、第一行，需要单独处理

const minPathSum = grid => {
    const row = grid.length,
        col = grid[0].length;
    for (let i = 1; i < row; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let j = 1; j < col; j++) {
        grid[0][j] += grid[0][j - 1];
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[row - 1][col - 1];
};
