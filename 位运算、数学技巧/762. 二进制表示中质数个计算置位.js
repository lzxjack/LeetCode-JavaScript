const countPrimeSetBits = (left, right) => {
  let res = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(bitCount(i))) {
      res++;
    }
  }
  return res;
};

// 判断质数
const isPrime = x => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i * i <= x; ++i) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

// 二进制1的个数
const bitCount = x => x.toString(2).split('0').join('').length;
