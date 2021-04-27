// let a = '     ';
// let arr = a.split(' ');
// const res = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i]) res.push(arr[i]);
// }

// console.log(res.join(' '));

const reverseWords = function (s) {
    let arr = s.split(' ');
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) res.push(arr[i]);
    }
    return res.join(' ');
};

let a = '  Bob    Loves  Alice   ';
let res = reverseWords(a);
console.log(res);
