const selfDividingNumbers = (left, right) => {
  const res = [];
  for (let i = left; i <= right; i++) {
    check(i) && res.push(i);
  }

  return res;
};

const check = num => {
  const nums = `${num}`.split('').map(str => Number(str));
  return nums.every(item => num % item === 0);
};
