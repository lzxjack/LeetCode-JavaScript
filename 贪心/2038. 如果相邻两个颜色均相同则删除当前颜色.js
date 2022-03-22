const winnerOfGame = colors => {
  let count = 0;
  const [A, B] = ['AAA', 'BBB'];
  const len = colors.length;
  for (let i = 0; i <= len - 3; i++) {
    // 截取当前3个字符
    // 统计双方能操作的数量
    if (colors.slice(i, i + 3) === A) {
      count++;
    } else if (colors.slice(i, i + 3) === B) {
      count--;
    }
  }
  // 最后判断count是否大于0，因为只有大于0，A的操作数才多，才能赢
  return count > 0;
};
