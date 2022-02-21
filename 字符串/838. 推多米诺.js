const pushDominoes = dominoes => {
  // 先将已平衡的牌锁定，状态肯定不会变
  dominoes = dominoes.replace(/R\.L/g, 'X');
  // 牌中只要有可以倒的牌，就循环
  while (dominoes.indexOf('R.') >= 0 || dominoes.indexOf('.L') >= 0) {
    // 向左倒
    dominoes = dominoes.replace(/\.L/g, 'LL');
    // 向右倒
    dominoes = dominoes.replace(/R\./g, 'RR');
    // 若出现平衡状态的，将其锁定
    dominoes = dominoes.replace(/R\.L/g, 'X');
  }
  // 最后没有可以倒的牌，将平衡状态的解锁
  dominoes = dominoes.replace(/X/g, 'R.L');
  return dominoes;
};
