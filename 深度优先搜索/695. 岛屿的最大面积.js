const maxAreaOfIsland = grid => {
    let res = 0;
    // 遍历地图每一个点，找其最大的岛屿
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            res = Math.max(res, dfs(grid, i, j));
        }
    }
    return res;
};

const dfs = (grid, i, j) => {
    // 以下情况不是岛屿，返回0
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== 1) return 0;

    // 遍历过的点，设置为0
    // 因为后面还会再次遍历到
    grid[i][j] = 0;
    // 该点面积为1
    let area = 1;

    // 从上下左右四方向继续找
    area += dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1);

    return area;
};
