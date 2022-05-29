const maximumImportance = (n, roads) => {
  const map = new Map();

  for (const [start, end] of roads) {
    map.set(start, (map.get(start) || 0) + 1);
    map.set(end, (map.get(end) || 0) + 1);
  }

  const arr = [...map].sort((a, b) => b[1] - a[1]);

  for (const [k, _] of arr) {
    map.set(k, n--);
  }

  let res = 0;
  for (const [start, end] of roads) {
    res += map.get(start) + map.get(end);
  }

  return res;
};
