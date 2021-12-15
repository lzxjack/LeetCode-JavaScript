const findTheDifference = (s, t) => {
    let res = 0;
    const lenS = s.length;
    for (let i = 0; i < lenS; i++) {
        res ^= s[i].charCodeAt(0);
    }
    const lenT = t.length;
    for (let i = 0; i < lenT; i++) {
        res ^= t[i].charCodeAt(0);
    }
    return String.fromCharCode(res);
};

console.log(findTheDifference('asd', 'asdd'));
