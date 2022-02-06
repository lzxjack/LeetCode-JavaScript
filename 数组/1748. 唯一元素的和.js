const sumOfUnique = nums => {
  let sum = 0;
  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      sum += num;
      map.set(num, 1);
    } else if (map.get(num) === 1) {
      sum -= num;
      map.set(num, 2);
    }
  }
  return sum;
};
