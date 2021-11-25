const solve = board => {
    // flag为true代表是中间的O
    const dfs = (i, j, flag) => {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] === 'X') return;
        // 访问标记
        visited[i][j] = 1;
        // 中间的O，则替换成X
        if (flag) board[i][j] = 'X';
        dfs(i + 1, j, flag);
        dfs(i, j + 1, flag);
        dfs(i - 1, j, flag);
        dfs(i, j - 1, flag);
    };
    const [m, n] = [board.length, board[0].length];
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 先对边缘的所有相连O，作一次访问标记
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
                dfs(i, j, false);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 再处理中间的所有相连O
            if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1 && board[i][j] === 'O') {
                dfs(i, j, true);
            }
        }
    }
    return board;
};
