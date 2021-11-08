// 笨方法
// const exchange = nums => {
//     const [odd, even] = [[], []];
//     for (const num of nums) {
//         if (num % 2) {
//             odd.push(num);
//         } else {
//             even.push(num);
//         }
//     }
//     return [...odd, ...even];
// };

// 双指针
const exchange = nums => {
    // 定义双指针
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        // 奇数，继续向右找，直到找到偶数
        while (left < right && nums[left] & 1) left++;
        // 偶数，继续向左找，直到找到奇数
        while (left < right && !(nums[right] & 1)) right--;
        // 交换奇偶数
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return nums;
};
