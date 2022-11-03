const spiralOrder = matrix => {
    const res = [];

    // 定义行、列
    // 可能是空数组，所以加一个'?'
    const [m, n] = [matrix.length, matrix[0]?.length];
    if (!m || !n) return res;

    // 初始化：左、右、上、下
    let [left, right, up, down] = [0, n - 1, 0, m - 1];

    while (1) {
        // 访问上边，从左到右，访问完毕后，up++
        for (let j = left; j <= right; j++) res.push(matrix[up][j]);
        up++;
        // 若up比down大，说明都访问完了，退出
        if (up > down) break;

        // 以下同理
        for (let i = up; i <= down; i++) res.push(matrix[i][right]);
        right--;
        if (right < left) break;

        for (let j = right; j >= left; j--) res.push(matrix[down][j]);
        down--;
        if (down < up) break;

        for (let i = down; i >= up; i--) res.push(matrix[i][left]);
        left++;
        if (left > right) break;
    }

    return res;
};
