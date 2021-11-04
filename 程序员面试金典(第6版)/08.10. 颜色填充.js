const floodFill = (image, sr, sc, newColor) => {
    // 行、列
    const [m, n] = [image.length, image[0].length];
    // 旧颜色
    const oldColor = image[sr][sc];
    // 创建是否访问过的矩阵，初始全为false
    const visited = new Array(m).fill(0).map(x => new Array(n).fill(false));

    const dfs = (i, j, oldColor, newColor) => {
        // 边界条件：i、j越界，或已访问过
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;
        // 当前颜色不等于旧颜色，标记访问，终止操作
        if (image[i][j] !== oldColor) {
            visited[i][j] = true;
            return;
        }
        // 颜色填充
        image[i][j] = newColor;
        // 标记访问
        visited[i][j] = true;
        // 四个方向继续填充
        dfs(i + 1, j, oldColor, newColor);
        dfs(i, j + 1, oldColor, newColor);
        dfs(i - 1, j, oldColor, newColor);
        dfs(i, j - 1, oldColor, newColor);
    };

    // 传入起点、旧颜色、新颜色
    dfs(sr, sc, oldColor, newColor);
    return image;
};
