const merge = (nums1, m, nums2, n) => {
    // 定义三个指针
    let [p1, p2, k] = [m - 1, n - 1, m + n - 1];
    // 当p1或p2指向有值
    while (p1 >= 0 || p2 >= 0) {
        if (p1 < 0) {
            // 如果p1已经移出
            // 将p2的位置赋值给nums1相应位置
            nums1[k--] = nums2[p2--];
        } else if (p2 < 0) {
            // 如果p2已经移出
            // 将p1的位置赋值给nums1相应位置
            nums1[k--] = nums1[p1--];
        } else if (nums1[p1] < nums2[p2]) {
            // nums1[p1]和nums2[p2]谁大，就将谁赋值到nums1相应位置
            nums1[k--] = nums2[p2--];
        } else {
            nums1[k--] = nums1[p1--];
        }
    }
    return nums1;
};
