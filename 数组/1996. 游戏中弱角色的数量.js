const numberOfWeakCharacters = properties => {
  // 攻击从大到小排序；若攻击相同，防御从小到大排序
  properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let res = 0;
  let max = 0;
  for (const [_, def] of properties) {
    if (max > def) {
      // 若当前的防御力小于记录的防御最大值
      // 肯定出现了一个弱者
      res++;
    } else {
      // 更新防御最大值
      max = def;
    }
  }
  return res;
};
