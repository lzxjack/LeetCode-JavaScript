const generate = numRows => {
    const res = [[1]];
    // i代表行，j代表每行的元素
    for (let i = 1; i < numRows; i++) {
        // 定义当前行
        const row = [];
        for (let j = 0; j <= i; j++) {
            // left左上角元素
            // left为上一行的、前一个j
            // 如果不存在就赋值0
            const left = res[i - 1][j - 1] || 0;
            // right右上角元素
            // right为上一行的、当前j
            const right = res[i - 1][j] || 0;
            // 当前元素为 左上角元素 + 右上角元素
            row.push(left + right);
        }
        // 把当前行加入res
        res.push(row);
    }
    return res;
};
