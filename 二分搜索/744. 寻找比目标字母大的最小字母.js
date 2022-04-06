const nextGreatestLetter = (letters, target) => {
  const targetNum = target;

  const len = letters.length;

  let [left, right] = [0, len - 1];

  while (left <= right) {
    const mid = (left + right) >> 1;
    const item = letters[mid];
    if (item > targetNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left >= len ? letters[0] : letters[left];
};
