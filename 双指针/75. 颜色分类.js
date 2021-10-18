const sortColors = nums => {
    // 交换数组的两个元素
    const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

    // 定义双指针
    let [p0, p2] = [0, nums.length - 1];
    for (let i = 0; i <= p2; i++) {
        // 遇到2，交换p2指针的值，p2左移
        // 因为交换过来的，也可能是2，所以需要while继续判断
        while (i <= p2 && nums[i] === 2) swap(i, p2--);
        // 遇到0，交换p1指针的值，p1右移
        // 交换过来的不可能再是0了，因为从左往右遍历的，如果有，左边就已经过了
        if (nums[i] === 0) swap(i, p0++);
    }
};
