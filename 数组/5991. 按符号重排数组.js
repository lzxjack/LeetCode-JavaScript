const rearrangeArray = nums => {
  // 正数、负数数组
  const [po, neg] = [[], []];
  for (const num of nums) {
    if (num > 0) {
      po.push(num);
    } else {
      neg.push(num);
    }
  }
  const res = [];
  for (let i = 0; i < po.length; i++) {
    res.push(po[i]);
    res.push(neg[i]);
  }
  return res;
};
