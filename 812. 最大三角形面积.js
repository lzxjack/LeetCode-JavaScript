const getArea = (A, B, C) => {
  const [x1, y1] = A;
  const [x2, y2] = B;
  const [x3, y3] = C;

  return (x1 * y2 - x2 * y1 + x2 * y3 - x3 * y2 + x3 * y1 - x1 * y3) / 2;
};

const largestTriangleArea = points => {
  let max = -1;
  const len = points.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        max = Math.max(max, getArea(points[i], points[j], points[k]));
      }
    }
  }

  return max;
};
