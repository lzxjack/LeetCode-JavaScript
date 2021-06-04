// const isPerfectSquare = num => {
//     if (num === 1) return true;
//     const n = num;
//     const len = num >> 1;
//     for (let i = 1; i <= len; i++) {
//         if (i * i === n) {
//             return true;
//         }
//     }
//     return false;
// };

// 二分查找
// const isPerfectSquare = num => {
//     let low = 0,
//         high = num;
//     while (low <= high) {
//         const mid = (low + high) >> 1;
//         if (mid * mid > num) {
//             high = mid - 1;
//         } else if (mid * mid < num) {
//             low = mid + 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// };

const isPerfectSquare = num => {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num === 0;
};
