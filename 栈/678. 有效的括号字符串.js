const checkValidString = s => {
    const [leftStack, starStack] = [[], []];
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const char = s[i];
        if (char === '(') {
            leftStack.push(i);
        } else if (char === '*') {
            starStack.push(i);
        } else {
            if (leftStack.length) {
                leftStack.pop();
            } else if (starStack.length) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }
    while (leftStack.length && starStack.length) {
        const [leftIndex, starIndex] = [leftStack.pop(), starStack.pop()];
        if (leftIndex > starIndex) return false;
    }
    return leftStack.length === 0;
};
