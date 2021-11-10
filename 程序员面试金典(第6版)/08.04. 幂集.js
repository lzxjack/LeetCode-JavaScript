const subsets = nums => {
    const res = [];
    const len = nums.length;
    if (!len) return res;
    // path是排列的数组
    // start是排列的起点
    const search = (path, start) => {
        // 将排列放入res
        res.push(path);
        for (let i = start; i < len; i++) {
            // 若当前nums[i]不在路径中
            // 则追加到path中，继续寻找，起点设置为i，只寻找起点之后的数字
            if (!path.includes(nums[i])) {
                search([...path, nums[i]], i);
            }
        }
    };
    // 空数组，从0开始
    search([], 0);
    return res;
};
