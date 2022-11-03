// 强行遍历;
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i + 1, j + 1];
//             }
//         }
//     }
// };

// 双指针
const twoSum = (nums, target) => {
    // 定义左右双指针
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        if (nums[left] + nums[right] > target) {
            // 太大了，要小一点，则right左移一位
            right--;
        } else if (nums[left] + nums[right] < target) {
            // 太小了，要大一点，则left右移一位
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};

console.log(twoSum([0, 1, 2, 3, 4], 3));
