const lexicalOrder = n => {
  const res = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    res.push(num);
    if (num * 10 <= n) {
      // 下一个字典序
      num *= 10;
    } else {
      while (num % 10 === 9 || num + 1 > n) {
        // num % 10 === 9：到当前位的最后一个了
        // num + 1 > n：超出目标数
        num = Math.floor(num / 10);
      }
      num++;
    }
  }
  return res;
};
