const maxConsecutiveAnswers = (answerKey, k) =>
  Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));

const maxConsecutiveChar = (answerKey, k, ch) => {
  let res = 0;
  let sum = 0;
  const n = answerKey.length;
  for (let left = 0, right = 0; right < n; right++) {
    sum += answerKey[right] !== ch ? 1 : 0;
    while (sum > k) {
      sum -= answerKey[left++] !== ch ? 1 : 0;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
