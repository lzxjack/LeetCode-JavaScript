const validTicTacToe = board => {
    // 统计X、O的数目
    let [numX, numO] = [0, 0];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // map.set(board[i][j], (map.get(board[i][j]) || 0) + 1);
            if (board[i][j] === 'X') {
                numX++;
            } else if (board[i][j] === 'O') {
                numO++;
            }
        }
    }
    // X、O的数目差值
    const diff = numX - numO;
    // 差值大于1或小于0，false
    if (diff > 1 || diff < 0) return false;
    // X连成的数目,O连成的数目
    let [countX, countO] = [0, 0];
    for (let i = 0; i < 3; i++) {
        // 统计行中连起来的数目
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            if (board[i][0] === 'X') {
                countX++;
            } else if (board[i][0] === 'O') {
                countO++;
            }
        }
        // 统计列中连起来的数目
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            if (board[0][i] === 'X') {
                countX++;
            } else if (board[0][i] === 'O') {
                countO++;
            }
        }
    }
    // 统计斜对角连起来的数目
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[0][0] === 'X') {
            countX++;
        } else if (board[0][0] === 'O') {
            countO++;
        }
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[0][2] === 'X') {
            countX++;
        } else if (board[0][2] === 'O') {
            countO++;
        }
    }
    // X和O不可能都连起来
    if (countX > 0 && countO > 0) return false;
    // X连起来，因为X先手，数目差值只能是1
    if (countX > 0 && diff !== 1) return false;
    // O连起来，因为O后手，数目差值只能是0
    if (countO > 0 && diff !== 0) return false;
    return true;
};
