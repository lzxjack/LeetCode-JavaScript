const findMinFibonacciNumbers = k => {
  const f = [1];
  let a = 1,
    b = 1;
  while (a + b <= k) {
    let c = a + b;
    f.push(c);
    a = b;
    b = c;
  }
  let ans = 0;
  for (let i = f.length - 1; i >= 0 && k > 0; i--) {
    const num = f[i];
    if (k >= num) {
      k -= num;
      ans++;
    }
  }
  return ans;
};
