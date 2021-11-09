const countVowels = word => {
    const A = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const n = word.length;
    for (let i = 0; i < n; i++) {
        if (A.includes(word[i])) {
            count += (i + 1) * (n - i);
        }
    }
    return count;
};
