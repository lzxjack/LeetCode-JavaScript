const longestWord = words => {
  // 字典序排序
  words.sort();

  let res = '';
  // 为了将第一个字符加入到set，初始值设为空字符串
  const set = new Set(['']);

  for (const w of words) {
    // 若当前字符串去掉最后一个字母后，在set中出现过
    // 则加入set并更新res
    if (set.has(w.slice(0, -1))) {
      if (w.length > res.length) res = w;
      set.add(w);
    }
  }

  return res;
};
