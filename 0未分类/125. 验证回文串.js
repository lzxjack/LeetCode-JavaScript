const isPalindrome = s => {
    s = s.toLowerCase();
    const reg = /^[0-9a-zA-Z]*$/;
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!reg.test(s[left])) {
            left++;
            continue;
        }
        if (!reg.test(s[right])) {
            right--;
            continue;
        }
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));

// const reg = /^[0-9a-zA-Z]*$/;
// let s = 'A man, a plan, a canal: Panama';
// for (let i = 0; i < s.length; i++) {
//     console.log(s[i], reg.test(s[i]));
// }
