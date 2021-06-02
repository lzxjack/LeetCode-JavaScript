const addDigits = num => {
    if (num === 0) return 0;
    return num % 9 || 9;
};
