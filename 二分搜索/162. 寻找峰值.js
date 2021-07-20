// const findPeakElement = nums => {
//     const search = (nums, left, right) => {
//         if (left === right) return left;
//         const mid = (left + right) >> 1;
//         if (nums[mid] < nums[mid + 1]) return search(nums, mid + 1, right);
//         return search(nums, left, mid);
//     };
//     return search(nums, 0, nums.length - 1);
// };

const findPeakElement = nums => {
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[mid + 1]) {
            // 下降
            right = mid;
        } else {
            // 上升
            left = mid + 1;
        }
    }
    return left;
};

console.log(findPeakElement([2, 1]));
