const sumOfThree = num => {
  if (num % 3) return [];
  return [num / 3 - 1, num / 3, num / 3 + 1];
};
