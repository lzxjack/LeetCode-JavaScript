const minSwaps = nums => {
    // 计算数组中1的个数
    let oneCount = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i]) oneCount++;
    }
    if (!oneCount) return 0;

    // 第一个窗口0的个数
    let changeCount = 0;
    for (let i = 0; i < oneCount; i++) {
        if (!nums[i]) changeCount++;
    }
    // 将两个数组拼起来
    const newNums = [...nums, ...nums];
    // 滑动窗口遍历
    // 不断更新0的个数
    let left = 0;
    let minChange = changeCount;
    // 遍历到len + oneCount即可
    for (let right = oneCount; right < len + oneCount; right++) {
        if (!newNums[left++]) changeCount--;
        if (!newNums[right]) changeCount++;
        minChange = Math.min(minChange, changeCount);
    }
    right = 0;
    return minChange;
};
