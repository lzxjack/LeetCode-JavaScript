const solution = isBadVersion => {
    return n => {
        let low = 0,
            high = n,
            // 先假设n是坏版本
            res = n;
        while (low <= high) {
            const mid = (low + high) >>> 1;
            if (isBadVersion(mid)) {
                // 如果找到新的坏版本，就更新res
                res = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return res;
    };
};
