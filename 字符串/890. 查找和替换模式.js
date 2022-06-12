const findAndReplacePattern = (words, pattern) => {
  const check = (word, pattern) => {
    const map = new Map();
    for (let i = 0; i < word.length; i++) {
      const [x, y] = [word[i], pattern[i]];
      if (!map.has(x)) {
        map.set(x, y);
      } else if (map.get(x) !== y) {
        return false;
      }
    }
    return true;
  };

  const res = [];
  for (let i = 0; i < words.length; i++) {
    check(words[i], pattern) && check(pattern, words[i]) && res.push(words[i]);
  }

  return res;
};
