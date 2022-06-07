const isBoomerang = points => {
  const [a, b, c] = points;
  const v1 = [b[0] - a[0], b[1] - a[1]];
  const v2 = [c[0] - a[0], c[1] - a[1]];

  return v1[0] * v2[1] - v1[1] * v2[0] !== 0;
};
