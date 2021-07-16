const merge = (nums1, m, nums2, n) => {
    let [p1, p2, k] = [m - 1, n - 1, m + n - 1];
    while (p1 >= 0 || p2 >= 0) {
        if (p1 < 0) {
            nums1[k--] = nums2[p2--];
        } else if (p2 < 0) {
            nums1[k--] = nums1[p1--];
        } else if (nums1[p1] < nums2[p2]) {
            nums1[k--] = nums2[p2--];
        } else {
            nums1[k--] = nums1[p1--];
        }
    }
    return nums1;
};
