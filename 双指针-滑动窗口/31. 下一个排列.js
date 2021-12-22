const nextPermutation = nums => {
    const len = nums.length;
    let i = len - 2;
    // 找到第一个当前项比后一项小的位置i
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    // i>=0，说明此时不是最大的排列
    if (i >= 0) {
        let j = len - 1;
        // 找到最小的比nums[i]大的数对应的j
        while (j >= 0 && nums[i] >= nums[j]) j--;
        // 交换位置
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // i后面的数升序排序
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
