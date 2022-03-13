const ONE = 1 << 7,
  TWO = ONE + (1 << 6);
const validUtf8 = data => {
  for (let i = 0; i < data.length; ) {
    let l = 1;
    for (; l < 7 && (data[i] >> (8 - l)) & (1 == 1); l++) {}
    if (l == 2 || l > 5 || i + l - 2 >= data.length) return false;
    if (l > 2) l--;
    for (let j = i + 1; j < i + l; j++) if ((data[j] & TWO) != ONE) return false;
    i += l;
  }
  return true;
};
