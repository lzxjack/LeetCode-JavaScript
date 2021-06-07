const firstUniqChar = s => {
    const len = s.length;
    const map = {};
    for (let i = 0; i < len; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }
    for (let i = 0; i < len; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar('aabbcc'));
