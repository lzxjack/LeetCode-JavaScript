const uncommonFromSentences = (s1, s2) => {
  const words1 = s1.split(' ');
  const words2 = s2.split(' ');
  const map = new Map();

  for (const word of words1) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  for (const word of words2) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  const res = [];
  for (const [word, count] of map) {
    if (count === 1) res.push(word);
  }

  return res;
};
