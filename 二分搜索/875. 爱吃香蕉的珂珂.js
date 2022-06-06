const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);

  let res = right;

  while (left < right) {
    const speed = (left + right) >> 1;
    const time = getTime(piles, speed);

    if (time <= h) {
      res = speed;
      right = speed;
    } else {
      left = speed + 1;
    }
  }

  return res;
};

const getTime = (piles, speed) => {
  let time = 0;

  for (const pile of piles) {
    time += Math.ceil(pile / speed);
  }

  return time;
};
