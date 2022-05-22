const numSquares = n => {
  // 答案只能是1、2、3、4的一种
  if (check4(n)) return 4;
  if (check1(n)) return 1;
  if (check2(n)) return 2;
  return 3;
};

// 若满足n=(4^a)*(8b+7)，则是4
const check4 = n => {
  while (n % 4 === 0) {
    n /= 4;
  }
  return n % 8 === 7;
};

// 若是一个数的平方，则是1
const check1 = n => {
  const num = Math.sqrt(n);
  return Math.floor(num) === num;
};

// 若是两个数的平方和，则是2
const check2 = n => {
  for (let i = 1; i <= n / 2; i++) {
    if (check1(i) && check1(n - i)) return true;
  }
  return false;
};
