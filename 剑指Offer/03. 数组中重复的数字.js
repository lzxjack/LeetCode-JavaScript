// const findRepeatNumber = nums => {
//     for (let i = 0; i < nums.length; i++) {
//         let cur = nums[i];
//         while (cur !== i) {
//             if (nums[i] === nums[cur]) return cur;
//             nums[i] = nums[cur];
//             nums[cur] = cur;
//         }
//     }
//     return null;
// };

const findRepeatNumber = nums => {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] === nums[i + 1]) return nums[i];
    }
    return null;
};
