const spiralOrder = matrix => {
    const m = matrix.length;
    const n = matrix[0].length;
    if (m === 1) return matrix[0];
    if (n === 1) {
        const res = [];
        for (const item of matrix) res.push(item[0]);
        return res;
    }
    let loop = Math.min(m, n) >> 1;
    let i = 0;
    let [startX, startY] = [0, 0];
    const res = [];
    while (++i <= loop + 1) {
        // 定义行列初始位置
        let [row, col] = [startX, startY];
        // 上：行不动，列增加
        while (col < n - i) res.push(matrix[row][col++]);
        // 右：列不动，行增加
        while (row < m - i) res.push(matrix[row++][col]);
        // 下：行不动，列减少
        while (col > startY) res.push(matrix[row][col--]);
        // 左：列不动，行减少
        while (row > startX) res.push(matrix[row--][col]);
        // 循环一次后，更新循环的起点位置
        startX++;
        startY++;
    }
    if (n & 1 && m & 1) {
        res.push(matrix[--startX][--startY]);
    }

    return res;
};
