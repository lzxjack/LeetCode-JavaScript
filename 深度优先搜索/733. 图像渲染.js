const floodFill = (image, sr, sc, newColor) => {
    // 如果给的坐标点的值等于传入的值，直接返回原图
    if (image[sr][sc] === newColor) {
        return image;
    }
    const oldColor = image[sr][sc];
    const dfs = (sr, sc) => {
        // 递归出口
        if (
            sr < 0 ||
            sc < 0 ||
            sr >= image.length ||
            sc >= image[0].length ||
            image[sr][sc] !== oldColor
        ) {
            return;
        }
        // 当前递归要做的事
        image[sr][sc] = newColor;

        // 四个方向递归
        dfs(sr + 1, sc);
        dfs(sr - 1, sc);
        dfs(sr, sc + 1);
        dfs(sr, sc - 1);
    };

    dfs(sr, sc);
    return image;
};
