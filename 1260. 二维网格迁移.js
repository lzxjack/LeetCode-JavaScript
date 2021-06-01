const shiftGrid = function (grid, k) {
    // 行
    const row = grid.length;
    // 列
    const column = grid[0].length;

    // 以下：二维数组 → 一维数组
    const nums = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            nums.push(grid[i][j]);
        }
    }

    // 旋转一维数组（189题）
    const len = nums.length;
    const changeCount = k % len;
    const newNums = [...nums, ...nums].slice(len - changeCount, 2 * len - changeCount);

    // 以下：一维数组 → 二维数组
    const res = [];
    let numCol = [];
    let count = 0;
    for (let i = 0; i < newNums.length; i++) {
        numCol.push(newNums[i]);
        count++;
        if (count === column) {
            res.push(numCol);
            count = 0;
            numCol = [];
        }
    }
    return res;
};
