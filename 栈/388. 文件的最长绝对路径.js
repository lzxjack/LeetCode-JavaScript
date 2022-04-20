const lengthLongestPath = input => {
  const path = input.split('\n').map(item => {
    item = item.split('\t');
    let deep = 0;
    for (const x of item) {
      if (!x) deep++;
    }
    return {
      deep,
      length: item[item.length - 1].length,
      isFile: item[item.length - 1].indexOf('.') !== -1
    };
  });

  let len = 0;
  let max = 0;
  const stack = [];
  for (const item of path) {
    const { deep, length, isFile } = item;
    if (stack.length) {
      while (deep - stack[stack.length - 1].deep !== 1) {
        const pop = stack.pop();
        len -= pop.length;
        if (!stack.length) break;
      }
    }

    len += length;
    if (isFile) {
      len += deep;
      max = Math.max(max, len);
      len -= deep + length;
    } else {
      stack.push(item);
    }
  }

  return max;
};
