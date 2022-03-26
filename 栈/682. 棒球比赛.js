const calPoints = ops => {
  let sum = 0;
  const stack = [];
  for (const item of ops) {
    if (item === '+') {
      const num = Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]);
      stack.push(num);
      sum += num;
    } else if (item === 'D') {
      const num = Number(2 * stack[stack.length - 1]);
      stack.push(num);
      sum += num;
    } else if (item === 'C') {
      sum -= Number(stack.pop());
    } else {
      const num = Number(item);
      stack.push(num);
      sum += num;
    }
  }

  return sum;
};
