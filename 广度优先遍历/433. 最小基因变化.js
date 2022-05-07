const minMutation = (start, end, bank) => {
  const bankSet = new Set(bank);
  const choices = ['A', 'C', 'G', 'T'];

  const usedSet = new Set();
  let level = 0;

  const queue = [start];
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const curr = queue.shift();
      if (curr === end) return level;
      usedSet.add(curr);
      for (let j = 0; j < curr.length; j++) {
        for (let k = 0; k < 4; k++) {
          const next = `${curr.slice(0, j)}${choices[k]}${curr.slice(j + 1)}`;
          if (usedSet.has(next) || !bankSet.has(next)) continue;
          queue.push(next);
        }
      }
    }
    level++;
  }

  return -1;
};
