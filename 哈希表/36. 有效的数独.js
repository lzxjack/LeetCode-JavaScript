const isValidSudoku = board => {
    // 三个方向判重
    const [rows, columns, boxes] = [{}, {}, {}];
    // 遍历数独
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num !== '.') {
                // 子数独序号:0~8，一共9个
                const boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
                // 如果当前数已经在某个位置出现过了，返回false
                if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {
                    return false;
                }
                // 三个方向上每个位置，将当前数做标记，表示出现过了
                rows[i + '-' + num] = true;
                columns[j + '-' + num] = true;
                boxes[boxIndex + '-' + num] = true;
            }
        }
    }
    return true;
};
