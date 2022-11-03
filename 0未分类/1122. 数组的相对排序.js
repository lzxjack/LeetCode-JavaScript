const relativeSortArray = (arr1, arr2) => {
    const [sorted, remain] = [[], []];
    const [len1, len2] = [arr1.length, arr2.length];
    for (let i = 0; i < len2; i++) {
        const num = arr2[i];
        for (let i = 0; i < len1; i++) {
            // 如果出现了arr2中的数，放入sorted
            // 并将此元素设为null，方便后面统计剩下的数
            if (arr1[i] === num) {
                sorted.push(arr1[i]);
                arr1[i] = null;
            }
        }
    }
    // 找到剩下的数，放入remain，并排序
    for (let i = 0; i < len1; i++) {
        if (arr1[i]) remain.push(arr1[i]);
    }
    remain.sort((a, b) => a - b);

    // 合并两数组
    return [...sorted, ...remain];
};
