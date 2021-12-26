const isSameAfterReversals = num => {
    if (num === 0) return true;
    if (`${num}`.endsWith('0')) return false;
    return true;
};
