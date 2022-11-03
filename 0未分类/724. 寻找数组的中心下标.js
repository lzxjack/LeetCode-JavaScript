const pivotIndex = nums => {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        // 计算前缀和
        nums[i] = nums[i - 1] + nums[i];
    }
    // 数组总和
    const sum = nums[len - 1];
    for (let i = 0; i < len; i++) {
        // 左边和
        const left = nums[i - 1] || 0;
        // 右边和
        const right = sum - nums[i];
        // 若相等，返回下标
        if (left === right) return i;
    }
    // 遍历一遍，没找到，返回-1
    return -1;
};
