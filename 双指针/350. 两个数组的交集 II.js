// const intersect = (nums1, nums2) => {
//     const res = [];
//     for (let i = 0; i < nums1.length; i++) {
//         // nums1中元素在nums2中的索引
//         const index = nums2.indexOf(nums1[i]);
//         if (index > -1) {
//             // 如果nums2中存在，则放入res
//             // 并将nums2中此元素删除
//             res.push(nums1[i]);
//             nums2.splice(index, 1);
//         }
//     }
//     return res;
// };

const intersect = (nums1, nums2) => {
    const res = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let [p1, p2] = [0, 0];
    const [len1, len2] = [nums1.length, nums2.length];
    while (p1 < len1 && p2 < len2) {
        if (nums1[p1] > nums2[p2]) {
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            res.push(nums1[p1]);
            p1++;
            p2++;
        }
    }
    return res;
};

// let res = intersect([3, 1, 2], [1, 1]);
let res = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(res);
