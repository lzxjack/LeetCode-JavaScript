const minimumCost = cost => {
  cost.sort((a, b) => b - a);
  let spend = 0;
  const len = cost.length;
  for (let i = 1; i <= len; i++) {
    if (i % 3 === 0) continue;
    spend += cost[i - 1];
  }
  return spend;
};
