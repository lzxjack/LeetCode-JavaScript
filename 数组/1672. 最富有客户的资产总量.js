const maximumWealth = accounts => {
  let max = 0;
  for (const people of accounts) {
    max = Math.max(
      max,
      people.reduce((a, b) => a + b)
    );
  }

  return max;
};
