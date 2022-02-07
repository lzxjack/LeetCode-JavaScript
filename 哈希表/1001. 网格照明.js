const gridIllumination = (n, lamps, queries) => {
  const row = new Map();
  const col = new Map();
  const diagonal = new Map();
  const antiDiagonal = new Map();
  const points = new Set();
  for (const lamp of lamps) {
    if (points.has(hash(lamp[0], lamp[1]))) {
      continue;
    }
    points.add(hash(lamp[0], lamp[1]));
    row.set(lamp[0], (row.get(lamp[0]) || 0) + 1);
    col.set(lamp[1], (col.get(lamp[1]) || 0) + 1);
    diagonal.set(lamp[0] - lamp[1], (diagonal.get(lamp[0] - lamp[1]) || 0) + 1);
    antiDiagonal.set(lamp[0] + lamp[1], (antiDiagonal.get(lamp[0] + lamp[1]) || 0) + 1);
  }
  const ret = new Array(queries.length).fill(0);
  for (const [i, [r, c]] of queries.entries()) {
    if (row.get(r) || col.get(c) || diagonal.get(r - c) || antiDiagonal.get(r + c)) {
      ret[i] = 1;
    }
    for (let x = r - 1; x < r + 2; x++) {
      for (let y = c - 1; y < c + 2; y++) {
        if (x < 0 || y < 0 || x >= n || y >= n || !points.has(hash(x, y))) {
          continue;
        }
        points.delete(hash(x, y));
        row.set(x, row.get(x) - 1);
        col.set(y, col.get(y) - 1);
        diagonal.set(x - y, diagonal.get(x - y) - 1);
        antiDiagonal.set(x + y, antiDiagonal.get(x + y) - 1);
      }
    }
  }
  return ret;
};

const hash = (x, y) => {
  return '' + x + y;
};
