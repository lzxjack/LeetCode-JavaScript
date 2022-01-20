const removePalindromeSub = s => {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] !== s[len - i - 1]) return 2;
  }
  return 1;
};
