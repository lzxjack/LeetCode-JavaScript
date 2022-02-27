const optimalDivision = nums => {
  const len = nums.length;
  if (len === 2) {
    return nums.join('/');
  }

  let res = '';
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      res = `${res}${nums[i]}`;
    } else if (i === 1) {
      res = `${res}/(${nums[i]}`;
    } else if (i === len - 1) {
      res = `${res}/${nums[i]})`;
    } else {
      res = `${res}/${nums[i]}`;
    }
  }

  return res;
};
