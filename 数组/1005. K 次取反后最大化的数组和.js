const largestSumAfterKNegations = (nums, k) => {
    // 升序排序
    nums.sort((a, b) => a - b);
    // 标记负数个数是否比k多
    let flag = false;
    const len = nums.length;
    // 遍历数组，将负数变正
    for (let i = 0; i < len; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
        if (k === 0) {
            // k次数用完了，直接退出
            // 标记一下，负数个数是否比k多
            flag = true;
            break;
        }
    }
    // 对操作完的数组求和
    let sum = nums.reduce((a, b) => a + b);
    if (flag) {
        // 若负数个数是否比k多，则可以直接返回sum了
        // 因为k次数已用完
        return sum;
    } else {
        // k多，需要判断一下k的奇偶
        // 再排序一次，因为前面负数变正，会影响排序
        nums.sort((a, b) => a - b);
        if (!(k % 2)) {
            // 剩余k为偶数，则相当于不操作
            return sum;
        } else {
            // 剩余k为奇数，则只需把最小的那个数反转
            return sum - 2 * nums[0];
        }
    }
};
