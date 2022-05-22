// 只要左括号数量等于右括号数量，则一定是有效的

const longestValidParentheses = s => {
  // 左右括号的数量
  let [left, right] = [0, 0];
  // 最长有效括号
  let max = 0;

  // 从左往右遍历
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    // 有效括号，更新max
    if (left === right) {
      max = Math.max(max, left * 2);
    } else if (right > left) {
      // 舍去，重新计数
      left = 0;
      right = 0;
    }
  }

  // 从右向左遍历
  [left, right] = [0, 0];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(max, left * 2);
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }

  return max;
};
