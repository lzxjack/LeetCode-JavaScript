const numJewelsInStones = (jewels, stones) => {
  const set = new Set(jewels.split(''));
  let count = 0;
  for (const s of stones) {
    set.has(s) && count++;
  }
  return count;
};
