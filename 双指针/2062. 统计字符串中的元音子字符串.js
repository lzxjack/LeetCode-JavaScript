const countVowelSubstrings = word => {
    const len = word.length;
    if (len < 5) return 0;
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 4; j < len; j++) {
            const arr = new Set(word.slice(i, j + 1));
            if ([...arr].sort().join('') === 'aeiou') count++;
        }
    }
    return count;
};
