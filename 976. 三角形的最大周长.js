const largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        let [first, second, third] = [nums[i], nums[i + 1], nums[i + 2]];
        if (second + third > first) return first + second + third;
    }
    return 0;
};
console.log(largestPerimeter([3, 6, 2, 3]));

// 先按照降序排序，再从头开始遍历数组
// 每三个为一组，若满足三角形周长条件，则返回
// 遍历完成后还没找到，返回0
