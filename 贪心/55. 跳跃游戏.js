const canJump = nums => {
  // 特殊情况
  if (nums.length === 1) return true;

  // 从后向前遍历
  for (let i = nums.length - 2; i >= 0; i--) {
    // 如果元素大于0，则肯定可以到底后一个
    if (nums[i]) {
      continue;
    } else {
      // 元素为0
      // 找这个元素之前的元素，有没有nums[j]>i-j
      // 若有，则说明可以越过当前的0；否则就越不过
      let j;
      for (j = 0; j < i; j++) {
        if (nums[j] > i - j) break;
      }
      if (j === i) return false;
    }
  }

  return true;
};
