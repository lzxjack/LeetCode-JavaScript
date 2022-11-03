const findMissingRanges = (nums, lower, upper) => {
    // 处理特殊情况
    if (nums.length === 0) {
        return lower === upper ? [`${lower}`] : [`${lower}->${upper}`];
    }

    const res = [];

    // 处理头部
    if (nums[0] !== lower) {
        const right = nums[0] - 1;
        const item = right === lower ? `${lower}` : `${lower}->${right}`;
        res.push(item);
    }

    // 处理中间
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] - 1 !== nums[i - 1]) {
            const [left, right] = [nums[i - 1] + 1, nums[i] - 1];
            const item = left === right ? `${left}` : `${left}->${right}`;
            res.push(item);
        }
    }

    // 处理尾部
    if (nums[len - 1] !== upper) {
        const left = nums[len - 1] + 1;
        const item = left === upper ? `${left}` : `${left}->${upper}`;
        res.push(item);
    }

    return res;
};
