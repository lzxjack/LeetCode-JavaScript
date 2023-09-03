const eliminateMaximum = (dist, speed) => {
  const n = dist.length;
  const arrivalTimes = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    arrivalTimes[i] = Math.ceil(dist[i] / speed[i]);
  }
  arrivalTimes.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arrivalTimes[i] <= i) {
      return i;
    }
  }
  return n;
};
