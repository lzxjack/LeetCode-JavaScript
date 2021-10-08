// 去掉(s+s)的首尾字符后，判断是否包含s
const repeatedSubstringPattern = s => (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1;
