const isUnique = str => {
    const arr = [...new Set(str.split(''))];
    return arr.length === str.length;
};
