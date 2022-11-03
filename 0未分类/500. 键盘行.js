const findWords = words => {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const res = [];
    // 遍历三行键盘
    keys.forEach(key => {
        // 满足以下条件的单词放入res
        res.push(
            // 从words筛选出每个字母都在当前行的单词，并展开
            ...words.filter(word => {
                return word
                    .toLowerCase()
                    .split('')
                    .every(char => key.includes(char));
            })
        );
    });
    return res;
};
