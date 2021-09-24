const isUnique = str => {
    const map = new Map();
    const len = str.length;
    for (let i = 0; i < len; i++) {
        if (map.get(str[i])) return false;
        map.set(str[i], 1);
    }

    return true;
};

// const isUnique = str => {
//     const arr = [...new Set(str.split(''))];
//     return arr.length === str.length;
// };
