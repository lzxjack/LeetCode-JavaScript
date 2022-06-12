const heightChecker = heights => {
  const temp = [...heights];
  temp.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i < heights.length; i++) {
    if (temp[i] !== heights[i]) res++;
  }

  return res;
};
