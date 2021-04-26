let lengthOfLastWord = function (s) {
    if (s.length === 0) return 0;
    let arr = s.split(' ').filter(item => item != '');
    console.log(arr);
    return arr.length === 0 ? 0 : arr[arr.length - 1].length;
};

let s = '        b         a     sdfsdf  ';
console.log(lengthOfLastWord(s));
