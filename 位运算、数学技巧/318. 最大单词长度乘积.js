// 将单词转化为二进制数字,a在低位，z在高位
const getNum = word => {
    let num = 0;
    const len = word.length;
    for (let i = 0; i < len; i++) {
        const bit = 1 << (word[i].charCodeAt() - 97);
        num |= bit;
    }
    return num;
};

const maxProduct = words => {
    // 避免重复计算，将words数组转化成数字数组
    const nums = words.map(word => getNum(word));
    let max = 0;
    const len = nums.length;
    // 找到不含公共字母的两个单词，更新max
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (!(nums[i] & nums[j])) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};
