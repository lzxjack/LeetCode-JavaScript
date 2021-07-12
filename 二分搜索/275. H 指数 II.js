const hIndex = citations => {
    const N = citations.length;
    let [left, right] = [0, N - 1];
    while (left <= right) {
        const mid = (left + right) >> 1;
        // 取得中间值item
        const item = citations[mid];
        // 如果中间值item >= N - mid
        // 说明h指数肯定是大于等于mid的
        // 即h指数的mid一定在mid的左边，或者就是mid
        // 那么左移right
        // 否则不满足item >= N - mid
        // 那么h指数的mid肯定在mid右边
        if (item >= N - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // 找到左边界条件后，N-left是h指数
    return N - left;
};
