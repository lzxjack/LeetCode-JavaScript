const maxNumberOfBalloons = text => {
  const map = new Map();
  const arr = new Array(5).fill(0);
  for (const char of text) {
    if (char === 'b') {
      arr[0]++;
    } else if (char === 'a') {
      arr[1]++;
    } else if (char === 'l') {
      arr[2]++;
    } else if (char === 'o') {
      arr[3]++;
    } else if (char === 'n') {
      arr[4]++;
    }
  }
  arr[2] = Math.floor(arr[2] / 2);
  arr[3] = Math.floor(arr[3] / 2);
  return Math.min(...arr);
};
