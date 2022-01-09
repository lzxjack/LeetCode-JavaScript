const isAdditiveNumber = num => {
    const n = num.length;
    for (let secondStart = 1; secondStart < n - 1; ++secondStart) {
        if (num[0] === '0' && secondStart !== 1) {
            break;
        }
        for (let secondEnd = secondStart; secondEnd < n - 1; ++secondEnd) {
            if (num[secondStart] === '0' && secondStart !== secondEnd) {
                break;
            }
            if (valid(secondStart, secondEnd, num)) {
                return true;
            }
        }
    }
    return false;
};

const valid = (secondStart, secondEnd, num) => {
    const n = num.length;
    let firstStart = 0,
        firstEnd = secondStart - 1;
    while (secondEnd <= n - 1) {
        const third = stringAdd(num, firstStart, firstEnd, secondStart, secondEnd);
        const thirdStart = secondEnd + 1;
        const thirdEnd = secondEnd + third.length;
        if (thirdEnd >= n || num.slice(thirdStart, thirdEnd + 1) !== third) {
            break;
        }
        if (thirdEnd === n - 1) {
            return true;
        }
        firstStart = secondStart;
        firstEnd = secondEnd;
        secondStart = thirdStart;
        secondEnd = thirdEnd;
    }
    return false;
};

const stringAdd = (s, firstStart, firstEnd, secondStart, secondEnd) => {
    const third = [];
    let carry = 0,
        cur = 0;
    while (firstEnd >= firstStart || secondEnd >= secondStart || carry !== 0) {
        cur = carry;
        if (firstEnd >= firstStart) {
            cur += s[firstEnd].charCodeAt() - '0'.charCodeAt();
            --firstEnd;
        }
        if (secondEnd >= secondStart) {
            cur += s[secondEnd].charCodeAt() - '0'.charCodeAt();
            --secondEnd;
        }
        carry = Math.floor(cur / 10);
        cur %= 10;
        third.push(String.fromCharCode(cur + '0'.charCodeAt()));
    }
    third.reverse();
    return third.join('');
};
