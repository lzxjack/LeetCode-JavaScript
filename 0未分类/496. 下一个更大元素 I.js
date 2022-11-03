// const nextGreaterElement = (nums1, nums2) => {
//     const len1 = nums1.length;
//     const len2 = nums2.length;
//     const res = [];
//     for (let i = 0; i < len1; i++) {
//         // 找到当前元素在nums2中的位置
//         let j = nums2.indexOf(nums1[i]);
//         while (j < len2) {
//             // 逐个比较，找到第一个比它大的元素
//             if (nums1[i] < nums2[j]) {
//                 res[i] = nums2[j];
//                 break;
//             }
//             j++;
//             if (j === len2) res[i] = -1;
//         }
//     }
//     return res;
// };

const nextGreaterElement = (nums1, nums2) => {
    const map = new Map();
    // 单调栈
    const stack = [];
    const len2 = nums2.length;
    // 倒序遍历nums2
    for (let i = len2 - 1; i >= 0; i--) {
        const num = nums2[i];
        // 若栈顶元素小于当前数，不断弹出栈顶
        while (stack.length && stack[stack.length - 1] <= num) stack.pop();
        // 现在为止，栈要么为空，要么都是比当前元素大的数，且是递减关系
        // 所以第一个比当前元素大的数为栈顶元素
        map.set(num, stack.length ? stack[stack.length - 1] : -1);
        stack.push(num);
    }
    const res = [];
    // 找到相应的数即可
    const len1 = nums1.length;
    for (let i = 0; i < len1; i++) {
        res.push(map.get(nums1[i]));
    }
    return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
