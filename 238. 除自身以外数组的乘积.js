const productExceptSelf = nums => {
    const len = nums.length;
    // 定义左累积数组、右累积数组，初始值都为 1
    const [resLeft, resRight] = [new Array(len).fill(1), new Array(len).fill(1)];
    for (let i = 1; i < len; i++) {
        // 从i=1开始，作左累积运算
        resLeft[i] = resLeft[i - 1] * nums[i - 1];
    }
    for (let i = len - 2; i >= 0; i--) {
        // 从i=len - 2开始，作右累积运算
        resRight[i] = resRight[i + 1] * nums[i + 1];
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        // 两个数组的元素对应相乘，即可得到当前元素的答案
        res.push(resLeft[i] * resRight[i]);
    }
    return res;
};
// 1. 和**求前缀和**的思路一致，分别求出**左累积数组**和**右累积数组**
// 2. 两个数组的元素对应相乘，即可得到当前元素的答案

const productExceptSelf = nums => {
    const len = nums.length;
    // 定义左累积数组、右累积数组，初始值都为 1
    const resLeft = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        // 从i=1开始，作左累积运算
        resLeft[i] = resLeft[i - 1] * nums[i - 1];
    }
    let Right = 1;
    for (let i = len - 1; i >= 0; i--) {
        resLeft[i] = resLeft[i] * Right;
        Right *= nums[i];
    }
    return resLeft;
};
