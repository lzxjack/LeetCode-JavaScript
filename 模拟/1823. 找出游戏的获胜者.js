const findTheWinner = (n, k) => {
  // 生成n名小伙伴
  const friends = new Array(n).fill(0).map((_, index) => index + 1);
  // index代表要淘汰的小伙伴的索引
  // 第一轮淘汰索引为k-1的小伙伴
  let index = k - 1;
  // 若小伙伴人数大于1，继续游戏
  while (friends.length > 1) {
    // 淘汰索引为index的小伙伴
    friends.splice(index, 1);
    // 重新数k个小伙伴
    index = (index + k - 1) % friends.length;
  }
  // 最后游戏只剩下1人，胜利者！
  return friends[0];
};
