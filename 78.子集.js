var subsets = function(nums) {
    const res = [];
    const backtrack = (path, l, start) => {
        if (path.length === l) {
            res.push(path);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            backtrack(path.concat(nums[i]), l, i + 1);
        }
    }
    for (let i = 0; i <= nums.length; i++) {
        // i表示路径长度
        backtrack([], i, 0);
    }
    return res;
};

// 时间：O(2^N)
// 空间：O(N)