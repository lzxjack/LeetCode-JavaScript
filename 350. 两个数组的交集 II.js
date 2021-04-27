const intersect = function (nums1, nums2) {
    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        // console.log(index);
        if (index > -1) {
            res.push(nums1[i]);
            nums2.splice(index, 1);
        }
    }
    return res;
};

// let res = intersect([3, 1, 2], [1, 1]);
let res = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(res);
