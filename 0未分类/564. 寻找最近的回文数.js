// hard

const nearestPalindromic = n => {
  getBigInt = function (orignal, v) {
    for (; orignal > 0; orignal /= 10n) v = 10n * v + (orignal % 10n);
    return v;
  };

  const len = n.length,
    nVal = BigInt(n);
  if (len == 1) return nVal - 1n + '';
  const half = BigInt(n.substr(0, (len + 1) >> 1)),
    ans = new Set();
  ans.add(BigInt(Math.pow(10, len - 1) - 1));
  ans.add(BigInt(Math.pow(10, len) + 1));
  if (len & (1 == 1)) {
    ans.add(getBigInt((half + 1n) / 10n, half + 1n));
    ans.add(getBigInt(half / 10n, half));
    ans.add(getBigInt((half - 1n) / 10n, half - 1n));
  } else {
    ans.add(getBigInt(half + 1n, half + 1n));
    ans.add(getBigInt(half, half));
    ans.add(getBigInt(half - 1n, half - 1n));
  }
  let res = -1;
  for (const other of ans) {
    if (other != nVal) {
      if (res == -1) res = other;
      let o = other - nVal,
        r = res - nVal;
      if (o < 0) o *= -1n;
      if (r < 0) r *= -1n;
      if (o < r || (other < res && o == r)) res = other;
    }
  }
  return res + '';
};
