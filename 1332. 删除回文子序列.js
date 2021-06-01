const removePalindromeSub = s => {
    if (s === '') return 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        console.log(s[i], s[len - 1]);
        if (s[i] !== s[len - 1]) return 2;
        len--;
    }
    return 1;
};

const str = 'aba';
console.log(removePalindromeSub(str));
