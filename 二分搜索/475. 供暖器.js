const search = (heaters, house) => {
    let [left, right] = [0, heaters.length - 1];
    // 最小的供暖器都在目标房屋的右边
    // 说明房屋左边没有合适的供暖器，用-1代替
    if (heaters[left] > house) return -1;
    while (left < right) {
        // const mid = (left + right) >> 1;
        const mid = ((right - left + 1) >> 1) + left;
        if (heaters[mid] > house) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};

const findRadius = (houses, heaters) => {
    let r = 0;
    heaters.sort((a, b) => a - b);
    const n = heaters.length;
    for (const house of houses) {
        // 距离当前房屋最近的左供暖器i（可重合）
        const i = search(heaters, house);
        // 右供暖器j
        const j = i + 1;
        // 计算当前房屋离左右供暖器的距离
        const left = i < 0 ? Infinity : house - heaters[i];
        const right = j >= n ? Infinity : heaters[j] - house;
        // 更新半径
        r = Math.max(r, Math.min(left, right));
    }
    return r;
};
