const permute = nums => {
    if (!nums) return [];
    const res = [];
    // path是组合的数组
    const backtrack = path => {
        if (path.length === nums.length) {
            // 长度满足条件，推入res数组
            res.push(path);
            return;
        }
        nums.forEach(n => {
            // path中已经有n，放弃此轮
            if (path.includes(n)) return;
            // 将n加入path继续找
            backtrack([...path, n]);
        });
    };
    // 从空数组开始
    backtrack([]);
    return res;
};

// 时间：O(N!)
// 空间：O(N)
