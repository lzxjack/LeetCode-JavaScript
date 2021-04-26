let merge = function (nums1, m, nums2, n) {
    let index1 = m - 1,
        index2 = n - 1,
        index = m + n - 1;
    while (index2 >= 0) {
        if (index1 < 0) {
            nums1[index] = nums2[index2];
            index--;
            index2--;
            continue;
        }
        // nums1[index--] = nums1[index1] >= nums2[index2] ? nums1[index1--] : nums2[index2--];
        if (nums1[index1] >= nums2[index2]) {
            nums1[index] = nums1[index1];
            index--;
            index1--;
        } else {
            nums1[index] = nums2[index2];
            index--;
            index2--;
        }
    }
    return nums1;
};
