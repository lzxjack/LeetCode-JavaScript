const minAbsoluteSumDiff = (nums1, nums2) => {
    // 复制一份nums1并排序
    const newNums = [...nums1].sort((a, b) => a - b);
    // sum：所有位置的绝对值累加和
    // maxn：替换前后最大差值
    // 要想答案最小，则maxn要最大
    let [sum, maxn] = [0, 0];
    const len = nums1.length;
    for (let i = 0; i < len; i++) {
        // 遍历nums1和nums2，求出sum
        const diff = Math.abs(nums1[i] - nums2[i]);
        sum += diff;
        // 遍历的过程中，在newNums中找与nums2[i]的最小绝对值
        // 用diff减去这个绝对值，就是当前位置的前后差值maxn
        // 每次找到后，就更新这个maxn，使之最大
        maxn = Math.max(maxn, diff - binarySearch(newNums, nums2[i]));
    }
    // 最后将 所有位置的绝对值累加和 减去 替换前后的最大差值
    return (sum - maxn) % 1000000007;
};

// 二分法：在newNums中找与nums2[i]的最小绝对值
const binarySearch = (newNums, target) => {
    let [low, high] = [0, newNums.length - 1];
    // lowVal：小指针指向的值
    // highVal：大指针指向的值
    let [lowVal, highVal] = [newNums[low], newNums[high]];
    while (low <= high) {
        const mid = (low + high) >> 1;
        const item = newNums[mid];
        if (item < target) {
            low = mid + 1;
            // 更新lowVal
            lowVal = newNums[mid];
        } else if (item > target) {
            high = mid - 1;
            // 更新highVal
            highVal = newNums[mid];
        } else {
            return 0;
        }
    }
    // 因为最接近target的数，可能大于target，也可能小于target
    // 所以求绝对值，并取最小
    const absA = Math.abs(target - lowVal);
    const absB = Math.abs(target - highVal);
    return Math.min(absA, absB);
};
