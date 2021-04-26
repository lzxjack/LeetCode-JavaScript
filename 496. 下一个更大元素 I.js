var nextGreaterElement = function (nums1, nums2) {
	const res = [];
	for (let i = 0; i < nums1.length; i++) {
		let j = nums2.indexOf(nums1[i]);
		while (j < nums2.length) {
			if (nums1[i] < nums2[j]) {
				res[i] = nums2[j];
				break;
			}
			j++;
			if (j === nums2.length) res[i] = -1;
		}
	}
	return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
