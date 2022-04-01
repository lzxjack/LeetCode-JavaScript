const canReorderDoubled = arr => {
  // 统计出现次数
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 0出现奇数，false
  if ((map.get(0) || 0) % 2) return false;

  // 去重，并按绝对值大小排序
  const vals = [...new Set(arr)];
  vals.sort((a, b) => Math.abs(a) - Math.abs(b));

  // 遍历判断，若2x的数量不够，则说明不能匹配
  for (const x of vals) {
    if ((map.get(2 * x) || 0) < map.get(x)) return false;
    map.set(2 * x, (map.get(2 * x) || 0) - map.get(x));
  }

  return true;
};
