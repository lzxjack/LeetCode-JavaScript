const countKDifference = (nums, k) => {
  let res = 0;
  const map = new Map();
  for (const num of nums) {
    res += (map.get(num - k) || 0) + (map.get(num + k) || 0);
    map.set(num, (map.get(num) || 0) + 1);
  }
  return res;
};

/* 暴力 */
// const countKDifference = (nums, k) => {
//   let res = 0;
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) res++;
//     }
//   }
//   return res;
// };
