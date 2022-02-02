const reversePrefix = (word, ch) => {
  const index = word.indexOf(ch);
  if (index < 0) return word;
  const res = [];
  const len = word.length;
  for (let i = 0; i <= index; i++) {
    res.push(word[i]);
  }
  res.reverse();
  for (let i = index + 1; i < len; i++) {
    res.push(word[i]);
  }
  return res.join('');
};
