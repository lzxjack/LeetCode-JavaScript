let searchInsert = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        // console.log(target);
        // console.log(nums[i]);
        if (target <= nums[i]) return i;
        // if(nums[i-1]&&target>nums[i-1]&&target<nums[i+1])
        // if (target < nums[i]) return i;
    }
    return i;
};

console.log(searchInsert([], 0));
