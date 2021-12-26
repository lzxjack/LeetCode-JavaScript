const findOcurrences = (text, first, second) => {
    const temp = text.split(' ');
    const res = [];
    const len = temp.length;
    for (let i = 0; i < len; i++) {
        if (temp[i] === first && temp[i + 1] === second) {
            temp[i + 2] && res.push(temp[i + 2]);
        }
    }
    return res;
};
