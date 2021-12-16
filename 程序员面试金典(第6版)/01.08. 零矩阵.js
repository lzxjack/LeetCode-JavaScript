const setZeroes = matrix => {
    // 行、列
    const [m, n] = [matrix.length, matrix[0]?.length];
    // 创建行列是否要置零的数组，默认全是false
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);

    // 第一次遍历，找到需要置零的行、列
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!matrix[i][j]) {
                row[i] = col[j] = true;
            }
        }
    }
    // 第二次遍历，在相应位置置零
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
