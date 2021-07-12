const findNumberIn2DArray = (matrix, target) => {
    if (!matrix.length) return false;
    // 定义左下角的坐标
    let [row, col] = [matrix.length - 1, 0];
    const len = matrix[0].length;
    // 坐标在矩阵内，就一直寻找
    while (row >= 0 && col <= len - 1) {
        // 当前元素
        const item = matrix[row][col];
        if (item === target) {
            // 找到，返回true
            return true;
        } else if (item > target) {
            // 太大了，上移一行
            row--;
        } else {
            // 太小了，右移一列
            col++;
        }
    }
    return false;
};
