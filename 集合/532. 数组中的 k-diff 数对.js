const findPairs = (nums, k) => {
  if (k < 0) return 0;

  const visit = new Set();
  const set = new Set();

  nums.forEach(num => {
    // 把较小者放入set
    if (visit.has(num - k)) {
      set.add(num - k);
    }
    if (visit.has(num + k)) {
      set.add(num);
    }
    visit.add(num);
  });

  return set.size;
};
