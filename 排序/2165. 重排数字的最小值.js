const smallestNumber = num => {
  const nums = [];
  // 标记是否是负数
  let isNeg = false;
  if (num < 0) {
    num = -num;
    isNeg = true;
  }
  // 获取每位数
  while (num) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }
  nums.sort((a, b) => a - b);

  const res = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // 负数，从大到小排
    // 正数，从小到大排
    res.push(isNeg ? nums[len - i - 1] : nums[i]);
  }
  if (!isNeg) {
    // 正数还需要将第一个不为0的数，与第一位数调换位置
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== 0) {
        [res[i], res[0]] = [res[0], res[i]];
        break;
      }
    }
  }

  return isNeg ? -Number(res.join('')) : Number(res.join(''));
};
