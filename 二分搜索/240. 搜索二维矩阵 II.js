const searchMatrix = (matrix, target) => {
    // 矩阵的行、列
    const [m, n] = [matrix.length, matrix[0].length];
    // (i,j)初始位置在左下角
    let [i, j] = [m - 1, 0];
    while (i >= 0 && j < n) {
        const item = matrix[i][j];
        if (item > target) {
            // 太大了，上移一行
            i--;
        } else if (item < target) {
            // 太小了，左移一列
            j++;
        } else {
            // 找到，返回true
            return true;
        }
    }
    // 遍历完没找到，返回false
    return false;
};
