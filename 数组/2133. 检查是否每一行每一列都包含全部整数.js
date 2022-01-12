const check = (n, nums) => {
    const set = new Set();
    let [max, min] = [0, n + 1];
    for (let i = 0; i < n; i++) {
        if (set.has(nums[i])) return false;
        set.add(nums[i]);
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
    }
    return set.size === n && max - min === n - 1;
};

const checkValid = matrix => {
    const n = matrix.length;
    // 检验行
    for (let i = 0; i < n; i++) {
        if (!check(n, matrix[i])) return false;
    }
    // 检验列
    for (let j = 0; j < n; j++) {
        const temp = [];
        for (let i = 0; i < n; i++) {
            temp.push(matrix[i][j]);
        }
        if (!check(n, temp)) return false;
    }
    return true;
};
