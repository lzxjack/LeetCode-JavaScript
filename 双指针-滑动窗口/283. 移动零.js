const moveZeroes = nums => {
    // 定义慢指针
    let slow = 0;
    // 定义快指针遍历nums
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            // 如果快指针遇到不为零的数
            // 将快指针对应的数给慢指针对应的数
            nums[slow] = nums[fast];
            // 慢指针右移
            slow++;
        }
    }
    // 快指针遍历一遍之后，所有不为0的数都已经到了数组的最前面
    // 接下来从慢指针开始，往后的数都赋值为0即可
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 0, 0, 12, 3]));
