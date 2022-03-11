const countHighestScoreNodes = parents => {
  const n = parents.length;
  const children = new Array(n).fill(0);
  let maxScore = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    children[i] = [];
  }
  for (let i = 0; i < n; i++) {
    const p = parents[i];
    if (p !== -1) {
      children[p].push(i);
    }
  }

  const dfs = node => {
    let score = 1;
    let size = n - 1;
    for (const c of children[node]) {
      let t = dfs(c);
      score *= t;
      size -= t;
    }
    if (node !== 0) {
      score *= size;
    }
    if (score === maxScore) {
      cnt++;
    } else if (score > maxScore) {
      maxScore = score;
      cnt = 1;
    }
    return n - size;
  };

  dfs(0);
  return cnt;
};
