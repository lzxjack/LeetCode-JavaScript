const getValidT9Words = (num, words) => {
    // 建立数字和字母的映射关系
    const num2char = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const res = [];
    // 设置flag，默认为true
    let flag = true;
    const len = words.length;
    for (let i = 0; i < len; i++) {
        // 重置flag为true，防止上一个单词为false
        flag = true;
        // 当前单词
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            // 遍历当前单词，判断num相应位置的数字，是否包含相应位置的字母
            if (!num2char[num[j]].includes(word[j])) {
                // 没包含，flag设置为false，直接退出循环
                flag = false;
                break;
            }
        }
        // 若包含，放入答案数组
        flag && res.push(word);
    }
    return res;
};
