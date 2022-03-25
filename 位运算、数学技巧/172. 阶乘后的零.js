// 找阶乘后末尾0的数量 === 找5;

const trailingZeroes = n => {
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n /= 5;
  }
  return count;
};
