const countNegatives = grid => {
    const rowNum = grid.length,
        rowLen = grid[0].length;
    let res = 0;
    for (let i = 0; i < rowNum; i++) {
        const row = grid[i];
        for (let j = 0; j < rowLen; j++) {
            if (row[j] < 0) {
                res += rowLen - j;
                break;
            }
        }
    }
    return res;
};
