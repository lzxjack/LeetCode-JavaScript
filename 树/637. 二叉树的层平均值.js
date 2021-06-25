const averageOfLevels = root => {
    // 根节点入队
    const q = [root];
    // 返回的数组
    const res = [];
    while (q.length) {
        let len = q.length;
        // 暂时存放每一层所有数的数组
        const nums = [];
        while (len--) {
            // 队头出队并放入nums
            const n = q.shift();
            nums.push(n.val);
            // 左右子树入队
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
        // 当前层nums收集完毕，开始当前层求平均数
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        // 平均数放入res
        res.push(sum / nums.length);
    }
    return res;
};
