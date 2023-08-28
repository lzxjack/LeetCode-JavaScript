const insert = (intervals, newInterval) => {
  const res = [];
  let i = 0;
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++]);
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i++][1]);
  }
  res.push(newInterval);

  while (i < len) {
    res.push(intervals[i++]);
  }

  return res;
};
