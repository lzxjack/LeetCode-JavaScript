const countWords = (words1, words2) => {
    // 统计两个数组中，单词出现的次数
    const map1 = new Map();
    const map2 = new Map();
    for (const str of words1) {
        map1.set(str, (map1.get(str) || 0) + 1);
    }
    for (const str of words2) {
        map2.set(str, (map2.get(str) || 0) + 1);
    }
    let res = 0;
    // 遍历map1，找到都出现1次的单词
    for (const [word, count] of map1) {
        if (count === 1 && map2.get(word) === 1) res++;
    }
    return res;
};

console.log(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab']));
