const firstUniqChar = s => {
    const len = s.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < len; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar('aabbcc'));
