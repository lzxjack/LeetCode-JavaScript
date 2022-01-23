var numberOfArrays = function (differences, lower, upper) {
  let [left, right] = [lower, upper];
  let sum = 0;
  const len = differences.length;
  for (let i = 0; i < len; i++) {
    sum += differences[i];
    if (sum > 0) {
      right = Math.min(right, upper - sum);
    } else {
      left = Math.max(left, lower - sum);
    }
  }
  let res = right - left + 1;
  return res > 0 ? res : 0;
};
