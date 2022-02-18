const findCenter = edges => {
  const [m, n] = edges[0];
  return edges[1][0] === m || edges[1][1] === m ? m : n;
};
