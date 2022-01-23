const findLonely = nums => {
  const map = new Map();
  const res = [];
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [num, count] of map) {
    if (count === 1 && !map.get(num - 1) && !map.get(num + 1)) {
      res.push(num);
    }
  }
  return res;
};
