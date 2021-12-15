// const bulbSwitch = n => {
//     const arr = new Array(n).fill(false);
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n; j++) {
//             if ((j + 1) % i === 0) arr[j] = !arr[j];
//         }
//     }
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i]) res++;
//     }
//     return res;
// };

const bulbSwitch = n => Math.floor(Math.sqrt(n));
