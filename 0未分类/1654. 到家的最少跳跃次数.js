const minimumJumps = (forbidden, a, b, x) => {
  const lower = 0;
  const upper = Math.max(Math.max(...forbidden) + a, x) + b;
  let q = [[0, 1, 0]];
  const visited = new Set([0]);
  const forbiddenSet = new Set(forbidden);
  while (q.length > 0) {
    let position = q[0][0];
    let direction = q[0][1];
    let step = q[0][2];
    q.shift();
    if (position == x) {
      return step;
    }
    let nextPosition = position + a;
    let nextDirection = 1;
    if (
      lower <= nextPosition &&
      nextPosition <= upper &&
      !visited.has(nextPosition * nextDirection) &&
      !forbiddenSet.has(nextPosition)
    ) {
      visited.add(nextPosition * nextDirection);
      q.push([nextPosition, nextDirection, step + 1]);
    }
    if (direction == 1) {
      nextPosition = position - b;
      nextDirection = -1;
      if (
        lower <= nextPosition &&
        nextPosition <= upper &&
        !visited.has(nextPosition * nextDirection) &&
        !forbiddenSet.has(nextPosition)
      ) {
        visited.add(nextPosition * nextDirection);
        q.push([nextPosition, nextDirection, step + 1]);
      }
    }
  }
  return -1;
};
