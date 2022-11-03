// 记录每个点是否有0
// const setZeroes = matrix => {
//     const [m, n] = [matrix.length, matrix[0].length];
//     const arr = new Array(m).fill(0).map(x => new Array(n).fill(0));
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (arr[i][j]) continue;
//             if (matrix[i][j] === 0) {
//                 for (let k = 0; k < n; k++) {
//                     if (matrix[i][k]) arr[i][k] = 1;
//                     matrix[i][k] = 0;
//                 }
//                 for (let k = 0; k < m; k++) {
//                     if (matrix[k][j]) arr[k][j] = 1;
//                     matrix[k][j] = 0;
//                 }
//             }
//         }
//     }
//     return matrix;
// };

// 记录行列是否有0
const setZeroes = matrix => {
    const [m, n] = [matrix.length, matrix[0].length];
    // 行、列
    const [row, col] = [new Set(), new Set()];
    // 先遍历一遍，找出需要置零的行和列
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row.add(i);
                col.add(j);
            }
        }
    }
    // 再次遍历，在相应的行、列进行置零
    for (let i = 0; i < m; i++) {
        if (row.has(i)) {
            for (let k = 0; k < n; k++) matrix[i][k] = 0;
        }
        for (let j = 0; j < n; j++) {
            if (col.has(j)) {
                for (let k = 0; k < m; k++) matrix[k][j] = 0;
            }
        }
    }
    return matrix;
};
