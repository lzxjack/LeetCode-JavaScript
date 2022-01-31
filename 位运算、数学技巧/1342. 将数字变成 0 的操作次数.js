var numberOfSteps = function (num) {
  let count = 0;
  while (num) {
    if (num % 2) {
      num--;
    } else {
      num = num >> 1;
    }
    count++;
  }
  return count;
};
