// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // n:当前的数
        const n = nums[i];
        // n2:需要寻找的能配对的数
        const n2 = target - n;

        if (map.has(n2)) {
            // 如果map中有需要配对的数，直接返回两个 下标
            return [map.get(n2), i];
        } else {
            // 没有的话，放入字典，以供后面遍历需要
            map.set(n, i);
        }
    }
};
