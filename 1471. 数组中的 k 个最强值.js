const getStrongest = (arr, k) => {
    const arr2 = [...arr].sort((a, b) => a - b);
    const m = arr2[Math.floor((arr.length - 1) / 2)];
    arr.sort((a, b) => {
        if (Math.abs(a - m) > Math.abs(b - m) || (Math.abs(b - m) === Math.abs(a - m) && a > b)) {
            return -1;
        } else {
            return 1;
        }
    });
    return arr.slice(0, k);
};

console.log(getStrongest([6, 7, 11, 7, 6, 8], 2));
