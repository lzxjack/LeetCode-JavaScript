const isOneBitCharacter = bits => {
  const len = bits.length;
  let i;
  for (i = 0; i < len - 1; i++) {
    bits[i] && i++;
  }
  return i === len - 1;
};
