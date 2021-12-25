const isEvenOddTree = root => {
    // 二叉树层序遍历，按层放到res中
    const res = [];
    const q = [root];
    while (q.length) {
        let len = q.length;
        res.push([]);
        while (len--) {
            const n = q.shift();
            res[res.length - 1].push(n.val);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    // 遍历按层输出的结果，判断每层是否符合条件
    const n = res.length;
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            // 奇数下标，每个数要是偶数，且递减
            if (!isEven(res[i])) return false;
        } else {
            // 偶数下标，每个数要是奇数，且递增
            if (!isOdd(res[i])) return false;
        }
    }
    return true;
};

// 满足奇数且递增
const isOdd = nums => {
    if (!(nums[0] % 2)) return false;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (!(nums[i] % 2) || nums[i] <= nums[i - 1]) return false;
    }
    return true;
};
// 满足偶数且递减
const isEven = nums => {
    if (nums[0] % 2) return false;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] % 2 || nums[i] >= nums[i - 1]) return false;
    }
    return true;
};
