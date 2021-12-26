const mostWordsFound = sentences => {
    let max = -1;
    const len = sentences.length;
    for (let i = 0; i < len; i++) {
        const count = sentences[i].split(' ').length;
        max = Math.max(max, count);
    }
    return max;
};
