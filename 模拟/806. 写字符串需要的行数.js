const numberOfLines = (widths, s) => {
  const len = 100;

  let row = 1;
  let leave = 0;
  for (const c of s) {
    const width = widths[getNum(c)];
    if (leave + width <= len) {
      leave += width;
    } else {
      row++;
      leave = width;
    }
  }

  return [row, leave];
};

const getNum = c => c.charCodeAt() - 97;
