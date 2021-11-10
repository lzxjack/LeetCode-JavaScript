const permute = nums => {
    if (!nums) return [];
    const res = [];
    // path是组合的数组
    const search = path => {
        if (path.length === nums.length) {
            // 长度满足条件，推入res数组
            res.push(path);
            return;
        }
        for (const num of nums) {
            if (!path.includes(num)) {
                // 将没出现过的数字，加入path继续找
                search([...path, num]);
            }
        }
    };
    // 从空数组开始
    search([]);
    return res;
};
