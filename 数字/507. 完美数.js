const checkPerfectNumber = num => {
    if (num === 1) return false;
    let res = 1;
    for (let i = 2; i * i <= num; i++) {
        if (!(num % i)) res += i + num / i;
    }
    return res === num;
};
