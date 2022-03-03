const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const n = s.length;
  const arr = new Array(numRows)
    .fill(0)
    .map(() => new Array(Math.ceil((n * numRows) / (2 * numRows - 2))));

  let k = 0;

  const print = j => {
    for (let i = 0; i < numRows; i++) {
      arr[i][j] = s[k++];
      if (!s[k]) break;
    }

    for (let i = numRows - 2; i >= 1; i--) {
      arr[i][numRows - 1 + j - i] = s[k++];
      if (!s[k]) break;
    }
  };

  let j = 0;
  while (s[k]) {
    print(j);
    j += numRows - 1;
  }

  let res = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) res += arr[i][j];
    }
  }

  return res;
};
