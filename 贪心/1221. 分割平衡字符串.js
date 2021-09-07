// const balancedStringSplit = s => {
//     let res = 0;
//     let [numL, numR] = [0, 0];
//     const len = s.length;
//     for (let i = 0; i < len; i++) {
//         if (s[i] === 'L') {
//             numL++;
//         } else {
//             numR++;
//         }
//         if (numL && numL === numR) {
//             res++;
//             numL = 0;
//             numR = 0;
//         }
//     }
//     return res;
// };

const balancedStringSplit = s => {
    let [res, d] = [0, 0];
    const len = s.length;
    for (let i = 0; i < len; i++) {
        d = s[i] === 'L' ? d + 1 : d - 1;
        !d && res++;
    }
    return res;
};
