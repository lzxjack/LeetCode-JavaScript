const maxRepeating = (sequence, word) => {
  // 最长可重复的次数
  let k = Math.floor(sequence.length / word.length);

  // 若不是子字符串，k--
  while (sequence.indexOf(word.repeat(k)) < 0) k--;

  return k;
};
