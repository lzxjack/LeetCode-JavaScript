// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 时间复杂度o(m*n)
// 空间复杂度o(m)

// 1. 遍历num1数组，创建字典，键为数组中的元素，值为true
// 2. 创建新数组
// 3. 遍历nums2数组， 检验每个元素是否在字典中， 若存在， 则将其放入新数组， 并在字典中删除
var intersection = function(nums1, nums2) {
    const m = new Map();
    nums1.forEach(n => {
        m.set(n, true);
    });
    const arr = [];
    nums2.forEach(n => {
        if (m.get(n)) {
            arr.push(n);
            m.delete(n);
        }
    })
    return arr;
};

// console.log(intersection([1, 2, 3, 5, 4, 7, 7, 7, 7], [7, 7, 2, 6, 9, 1, 1, 1, ]));