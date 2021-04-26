// 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

// 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

// 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

//  

// 提示：

// 输出坐标的顺序不重要
// m 和 n 都小于150
//  

// 示例：

//  

// 给定下面的 5x5 矩阵:

//   太平洋 ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * 大西洋

// 返回:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).

var pacificAtlantic = function(matrix) {
    if (!matrix || !matrix[0]) { return []; }
    const m = matrix.length;
    const n = matrix[0].length;
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

    // 深度优先遍历函数
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1]
        ].forEach(([nr, nc]) => {
            if (
                // 保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 防止死循环
                !flow[nr][nc] &&
                matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow);
            }
        });
    }

    // 沿海岸线逆流而上
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }

    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }

    return res;
};