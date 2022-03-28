const hasAlternatingBits = n => {
  const a = n ^ (n >> 1);
  return !(a & (a + 1));
};
