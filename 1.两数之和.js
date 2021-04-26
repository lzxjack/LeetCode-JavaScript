// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function (nums, target) {
	const m = new Map();
	for (let i = 0; i < nums.length; i++) {
		// n当前的数
		const n = nums[i];
		// n2需要寻找的能配对的数
		const n2 = target - n;
		if (m.has(n2)) {
			return [m.get(n2), i];
		} else {
			m.set(n, i);
		}
	}
};
