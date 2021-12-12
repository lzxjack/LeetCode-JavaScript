const toLowerCase = s => {
    let res = '';
    for (const char of s) {
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            res = `${res}${String.fromCharCode(char.charCodeAt() | 32)}`;
        } else {
            res = `${res}${char}`;
        }
    }
    return res;
};
