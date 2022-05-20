const repeatedNTimes = nums => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};
