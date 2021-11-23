const triangleNumber = nums => {
    // 数组长度
    const len = nums.length;
    // 升序排序
    nums.sort((a, b) => a - b);
    let res = 0;
    // k是最大的边，从最右边开始
    for (let k = len - 1; k >= 2; k--) {
        // 定义[0,k)内两个指针
        let [left, right] = [0, k - 1];
        while (left < right) {
            if (nums[left] + nums[right] > nums[k]) {
                // 如果当前满足三角形的条件
                // 那么right不动，left右边的各个数+right+k代表的数肯定一定满足
                // 一共有(right-left)个可能，累加到res
                res += right-- - left;
                // 剩下的都不用判断了，right左移
                // right--;
            } else {
                // 当前left不满足条件，太小了，让其大一点
                // left右移
                left++;
            }
        }
    }
    return res;
};
