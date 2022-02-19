const maximumEvenSplit = finalSum => {
  // 奇数，肯定不行
  if (finalSum & 1) return [];
  let num = 2;
  const res = [];
  while (finalSum - num > num) {
    finalSum -= num;
    res.push(num);
    num += 2;
  }
  res.push(finalSum);
  return res;
};
