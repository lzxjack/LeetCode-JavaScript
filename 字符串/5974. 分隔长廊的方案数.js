const numberOfWays = corridor => {
  // 记录S的个数
  let sCount = 0;
  const temp = [];
  const len = corridor.length;
  for (let i = 0; i < len; i++) {
    // 统计S个数
    if (corridor[i] === 'S') {
      sCount++;
      if (sCount % 2 === 0) {
        // 若已经有2个S，则统计接下来P的个数
        let pCount = 0;
        for (let j = i + 1; j < len; j++) {
          // 遇到下一个S，将统计的P+1放入temp数组
          // 因为P个座位，有P+1种放法
          // 记得更新i
          if (corridor[j] === 'S') {
            i = j - 1;
            temp.push(BigInt(pCount + 1));
            break;
          } else {
            pCount++;
          }
        }
      }
    }
  }
  // S数量不足2，或者S数量奇数，没有方案
  if (sCount < 2 || sCount % 2) return 0;
  // 将所有的放法个数乘起来即可
  let res = BigInt(1);
  const mod = BigInt(10 ** 9 + 7);
  for (let i = 0; i < temp.length; i++) {
    res *= temp[i] % mod;
  }

  return res % mod;
};

//"SPPS SS SPPS"
