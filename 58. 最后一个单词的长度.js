// const lengthOfLastWord = s => {
//     const arr = s.split(' ').filter(item => item != '');
//     return arr[arr.length - 1].length;
// };

const lengthOfLastWord = s => {
    let [res, i] = [0, s.length - 1];
    // 跳过空字符
    while (s[i] === ' ') i--;
    // 统计单词长度
    // 防止`ASD    `的情况，无限循环，加一个边界条件：i >= 0
    while (i >= 0 && s[i] !== ' ') {
        i--;
        res++;
    }
    return res;
};

const str = 'asdfasdfasd   ';

console.log(lengthOfLastWord(str));

//
