const bestRotation = A => {
  let len = A.length;
  //求出对应K值得分数减少的数值
  let change = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    change[(i - A[i] + 1 + len) % len] -= 1;
  }
  //找到最大的分值对应的索引
  let maxIndex = 0;
  //默认设0号位置的分值为0、这个值可以随意设置，因为我们不需要知道其具体分值，只需要找到其最大值
  let score = 0;
  let maxScore = score;
  for (let i = 1; i < len; i++) {
    let nextScore = score + change[i] + 1;
    if (nextScore > maxScore) {
      maxScore = nextScore;
      maxIndex = i;
    }
    score = nextScore;
  }
  return maxIndex;
};
