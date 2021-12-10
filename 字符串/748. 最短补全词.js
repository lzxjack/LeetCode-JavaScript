const shortestCompletingWord = (licensePlate, words) => {
    const map = new Map();
    const len = licensePlate.length;
    for (let i = 0; i < len; i++) {
        const char = licensePlate[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    words.sort((a, b) => a.length - b.length);
    const len2 = words.length;
    let map2 = new Map();
    for (let i = 0; i < len2; i++) {
        map2 = new Map();
        for (let j = 0; j < words[i].length; j++) {
            map2.set(words[i][j], (map2.get(words[i][j]) || 0) + 1);
        }
        let num = 0;
        for (const [char, count] of map) {
            if (count <= (map2.get(char) || 0)) {
                num++;
            } else {
                break;
            }
        }
        if (num === map.size) return words[i];
    }
};
