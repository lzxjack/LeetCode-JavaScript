const isAlienSorted = (words, order) => {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) break;
    for (let j = 0; j < words[i].length; j++) {
      if (j === words[i + 1].length) return false;
      const a = map.get(words[i][j]);
      const b = map.get(words[i + 1][j]);
      if (a > b) {
        return false;
      } else if (a < b) {
        break;
      }
    }
  }

  return true;
};
