// ### 解题思路
// 1. 创建集合
// 2. 遍历数组
// 3. 判断当前元素是否在集合中，若在，则直接返回true
// 4. 若不在，将当前元素添加到集合中
// 5. 遍历结束后还没返回true，就返回false

// ### 代码
const containsDuplicate = nums => {
    const set = new Set();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
};
