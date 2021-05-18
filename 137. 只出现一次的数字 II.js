const singleNumber = nums => {
    // 创建字典
    const map = new Map();
    // 遍历数组，将（元素，出现的次数）放入字典
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    // 遍历数组，判断次数是否为1
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            return nums[i];
        }
    }
};

console.log(singleNumber([1, 2, 2, 2, 3, 3, 3]));
