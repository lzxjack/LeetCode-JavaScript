const kthSmallestPrimeFraction = (arr, k) => {
    const len = arr.length;
    // 分数的两个边界
    let [left, right] = [0, 1];
    while (true) {
        const mid = (left + right) / 2;
        let count = 0;
        // 此时的x、y代表最小的分数（此题中）
        let [x, y] = [1, arr[len - 1]];
        // 分母j右移后，之前的i肯定都满足
        // 所以i不用从头移动了，定义在for循环外边
        let i = 0;
        for (let j = 1; j < len; j++) {
            while (arr[i] / arr[j] < mid) {
                if (arr[i] * y > arr[j] * x) {
                    // 更新最大的分数
                    x = arr[i];
                    y = arr[j];
                }
                // 分子右移
                i++;
            }
            // 当前分母j，有i个分数满足条件
            count += i;
        }
        if (count < k) {
            // 满足条件的分数太少，需要增大mid
            left = mid;
        } else if (count > k) {
            // 满足条件的分数太多，需要减小mid
            right = mid;
        } else {
            // 刚好等于k，返回最大的分数
            return [x, y];
        }
    }
};
