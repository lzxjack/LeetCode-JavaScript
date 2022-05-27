const removeOuterParentheses = s => {
  const stack = [];
  const res = [];

  for (const c of s) {
    if (!stack.length) {
      stack.push(c);
    } else if (stack.length && c === '(') {
      stack.push(c);
      res.push(c);
    } else if (stack.length > 1 && c === ')') {
      stack.pop();
      res.push(c);
    } else if (stack.length === 1 && c === ')') {
      stack.pop();
    }
  }

  return res.join('');
};
