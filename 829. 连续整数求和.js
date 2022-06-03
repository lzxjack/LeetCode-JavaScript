const consecutiveNumbersSum = n => {
  let res = 0;
  const bound = 2 * n;
  for (let k = 1; k * (k + 1) <= bound; k++) {
    if (isKConsecutive(n, k)) {
      res++;
    }
  }
  return res;
};

const isKConsecutive = (n, k) => {
  if (k % 2 === 1) {
    return n % k === 0;
  } else {
    return n % k !== 0 && (2 * n) % k === 0;
  }
};
