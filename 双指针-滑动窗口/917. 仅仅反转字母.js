const reverseOnlyLetters = s => {
  const arr = s.split('');
  let [left, right] = [0, arr.length - 1];
  while (left < right) {
    while (/[^a-zA-Z]/.test(arr[left])) left++;
    while (/[^a-zA-Z]/.test(arr[right])) right--;
    if (left > right) break;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};
