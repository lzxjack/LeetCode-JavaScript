const modifyString = s => {
    // 只需在3个中寻找即可
    const chars = ['a', 'b', 'c'];
    const arr = s.split('');
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === '?') {
            for (const char of chars) {
                // 替换成前后都不相等的字母
                if (arr[i - 1] !== char && arr[i + 1] !== char) {
                    arr.splice(i, 1, char);
                    break;
                }
            }
        }
    }
    return arr.join('');
};
