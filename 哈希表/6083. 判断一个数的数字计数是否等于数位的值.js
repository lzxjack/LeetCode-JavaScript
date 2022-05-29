const digitCount = num => {
  const map = new Map();

  for (const n of num) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) !== (map.get(`${i}`) || 0)) return false;
  }
  return true;
};
