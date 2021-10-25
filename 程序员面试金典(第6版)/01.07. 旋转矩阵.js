const rotate = matrix => {
    let [start, end] = [0, matrix.length - 1];
    // 外层while表示旋转的层数
    while (start < end) {
        let [i, j] = [start, end];
        // 内层while每次旋转的次数
        while (i < end) {
            // 对应位置，强行旋转
            [matrix[start][i], matrix[i][end], matrix[end][j], matrix[j][start]] = [
                matrix[j][start],
                matrix[start][i],
                matrix[i][end],
                matrix[end][j],
            ];
            i++;
            j--;
        }
        start++;
        end--;
    }
};
