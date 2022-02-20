const countEven = num => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    getSum(i) && count++;
  }
  return count;
};

// 判断各个位数之和是否为偶数
const getSum = num => {
  const nums = `${num}`.split('').map(item => Number(item));
  const sum = nums.reduce((cur, pre) => cur + pre);
  return !(sum & 1);
};
