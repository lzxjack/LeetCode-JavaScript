const countBattleships = board => {
    const [m, n] = [board.length, board[0].length];
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                board[i][j] === 'X' &&
                (i === 0 || board[i - 1][j] === '.') &&
                (j === 0 || board[i][j - 1] === '.')
            ) {
                res++;
            }
        }
    }
    return res;
};
