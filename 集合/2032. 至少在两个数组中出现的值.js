const twoOutOfThree = (nums1, nums2, nums3) => {
    const nums12 = nums1.filter(num => nums2.includes(num));
    const nums13 = nums1.filter(num => nums3.includes(num));
    const nums23 = nums2.filter(num => nums3.includes(num));
    // 未去重的结果
    const res = [...nums12, ...nums13, ...nums23];
    // 去重后返回
    return [...new Set(res)];
};
