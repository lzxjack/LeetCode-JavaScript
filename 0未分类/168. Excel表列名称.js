const convertToTitle = n => {
    const arr = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    // 小于等于26，直接返回
    if (n <= 26) return arr[n - 1];
    let res = '';
    while (n > 0) {
        // n先减1
        n--;
        // 从后往前拼接
        res = arr[n % 26] + res;
        n = Math.floor(n / 26);
    }
    return res;
};
