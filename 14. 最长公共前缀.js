const longestCommonPrefix = strs => {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const res = [];
  const base = strs[0];
  const others = strs.slice(1);

  for (let i = 0; i < base.length; i++) {
    const flag = others.every(item => item[i] === base[i]);
    if (flag) {
      res.push(base[i]);
    } else {
      break;
    }
  }

  return res.join('');
};
