const replaceSpaces = (S, length) => {
    const arr = S.split('');
    for (let i = 0; i < length; i++) {
        if (arr[i] === ' ') arr[i] = '%20';
    }
    return arr.slice(0, length).join('');
};
