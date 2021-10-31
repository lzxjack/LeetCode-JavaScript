const relativeSortArray = (arr1, arr2) => {
    const [left, right] = [[], []];
    const [len1, len2] = [arr1.length, arr2.length];
    for (let i = 0; i < len2; i++) {
        for (let j = 0; j < len1; j++) {
            if (arr1[j] === arr2[i]) {
                left.push(arr1[j]);
                arr1[j] = null;
            }
        }
    }
    for (let i = 0; i < len1; i++) {
        arr1[i] !== null && right.push(arr1[i]);
    }
    right.sort((a, b) => a - b);
    return [...left, ...right];
};
