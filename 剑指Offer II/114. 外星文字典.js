const alienOrder = words => {
  const VISITING = 1,
    VISITED = 2;
  let valid = true;
  const edges = new Map();
  const states = new Map();
  const length = words.length;
  for (const word of words) {
    const wordLength = word.length;
    for (let j = 0; j < wordLength; j++) {
      const c = word[j];
      if (!edges.has(c)) {
        edges.set(c, []);
      }
    }
  }

  const addEdge = (before, after) => {
    const length1 = before.length,
      length2 = after.length;
    const length = Math.min(length1, length2);
    let index = 0;
    while (index < length) {
      const c1 = before[index],
        c2 = after[index];
      if (c1 !== c2) {
        edges.get(c1).push(c2);
        break;
      }
      index++;
    }
    if (index === length && length1 > length2) {
      valid = false;
    }
  };

  const dfs = u => {
    states.set(u, VISITING);
    const adjacent = edges.get(u);
    for (const v of adjacent) {
      if (!states.has(v)) {
        dfs(v);
        if (!valid) {
          return;
        }
      } else if (states.get(v) === VISITING) {
        valid = false;
        return;
      }
    }
    states.set(u, VISITED);
    order[index] = u;
    index--;
  };

  for (let i = 1; i < length && valid; i++) {
    addEdge(words[i - 1], words[i]);
  }
  const order = new Array(edges.size).fill(0);
  let index = edges.size - 1;
  const letterSet = edges.keys();
  for (const u of letterSet) {
    if (!states.has(u)) {
      dfs(u);
    }
  }
  if (!valid) {
    return '';
  }
  return order.join('');
};
