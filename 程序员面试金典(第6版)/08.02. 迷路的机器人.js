const pathWithObstacles = obstacleGrid => {
    // 行、列
    const [m, n] = [obstacleGrid.length, obstacleGrid[0]?.length];
    if (!m || !n) return [];

    // 定义res为null，便于判断是否到达终点
    // res为真代表已有分支到达终点了
    let res = null;

    const dfs = (path, i, j) => {
        // 越界、遇到障碍、已到达终点，则直接返回
        if (i >= m || j >= n || obstacleGrid[i][j] === 1 || res) return;

        // 标记此处，已经访问过了
        obstacleGrid[i][j] = 1;

        // 将当前坐标加入路径
        path.push([i, j]);

        // 到达终点
        if (i === m - 1 && j === n - 1) {
            // 将当前路径赋值给res，并返回
            res = path;
            return;
        }

        // path需要单独创建一份
        // 向右、下继续移动
        dfs([...path], i + 1, j);
        dfs([...path], i, j + 1);
    };

    dfs([], 0, 0);
    // 判断是否到达终点
    return res ? res : [];
};
