const minSwaps = data => {
    // 计算数组中1的个数
    let oneCount = 0;
    const len = data.length;
    for (let i = 0; i < len; i++) {
        if (data[i]) oneCount++;
    }
    if (!oneCount) return 0;

    // 第一个窗口0的个数
    let changeCount = 0;
    for (let i = 0; i < oneCount; i++) {
        if (!data[i]) changeCount++;
    }
    // 滑动窗口遍历
    // 不断更新0的个数
    let left = 0;
    let minChange = changeCount;
    for (let right = oneCount; right < len; right++) {
        if (!data[left++]) changeCount--;
        if (!data[right]) changeCount++;
        minChange = Math.min(minChange, changeCount);
    }
    return minChange;
};
