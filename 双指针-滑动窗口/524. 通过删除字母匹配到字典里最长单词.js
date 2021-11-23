const findLongestWord = (s, dictionary) => {
    // 按照字符串长度降序、字典序排序
    dictionary.sort((a, b) => (a.length === b.length ? a.localeCompare(b) : b.length - a.length));
    const lenS = s.length;

    for (const word of dictionary) {
        // 两个指针
        let [S, W] = [0, 0];
        const lenW = word.length;
        while (S < lenS && W < lenW) {
            if (s[S] === word[W]) W++;
            S++;
        }
        // W指针走到头说明word匹配完成
        if (W === lenW) return word;
    }
    return '';
};
