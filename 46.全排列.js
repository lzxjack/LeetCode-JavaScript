var permute = function(nums) {
    if (!nums) return [];
    const res = [];
    const backtrack = path => {
        if (path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach(n => {
            if (path.includes(n)) return;
            backtrack(path.concat(n));
        });
    }
    backtrack([]);
    return res;
};

// 时间：O(N!)
// 空间：O(N)