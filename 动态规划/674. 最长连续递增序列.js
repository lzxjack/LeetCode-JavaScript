// const findLengthOfLCIS = nums => {
//     const len = nums.length;
//     if (len === 1) return 1;
//     let res = 1;
//     const dp = new Array(len).fill(1);
//     for (let i = 1; i < len; i++) {
//         if (nums[i] > nums[i - 1]) {
//             dp[i] = dp[i - 1] + 1;
//         }
//         // 更新最大长度
//         res = dp[i] > res ? dp[i] : res;
//     }
//     return res;
// };

const findLengthOfLCIS = nums => {
    const len = nums.length;
    let [res, count] = [1, 1];
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
            // 只有在count++后，才可能出现新的最大值
            res = count > res ? count : res;
        } else {
            count = 1;
        }
    }
    return res;
};
