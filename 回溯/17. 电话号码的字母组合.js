const letterCombinations = digits => {
  if (!digits) return [];
  const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res = [];

  const dfs = (path, i) => {
    if (i >= digits.length) {
      res.push(path);
      return;
    }
    const letters = map[digits[i]];
    for (const char of letters) {
      dfs(`${path}${char}`, i + 1);
    }
  };

  dfs('', 0);
  return res;
};
