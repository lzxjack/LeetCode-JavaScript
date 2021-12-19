// 检验是否是回文串
const check = word => {
    const len = word.length;
    for (let i = 0; i < len; i++) {
        if (word[i] !== word[len - 1 - i]) return false;
        if (i >= Math.floor(len / 2)) break;
    }
    return true;
};

const firstPalindrome = words => {
    const len = words.length;
    for (let i = 0; i < len; i++) {
        if (check(words[i])) return words[i];
    }
    return '';
};
