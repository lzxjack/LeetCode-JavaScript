const exist = (board, word) => {
  const [m, n] = [board.length, board[0].length];

  const dfs = (i, j, index) => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) return false;

    if (index === word.length - 1) return true;

    const temp = board[i][j];
    board[i][j] = '';

    const res =
      dfs(i + 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j - 1, index + 1);

    board[i][j] = temp;
    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
