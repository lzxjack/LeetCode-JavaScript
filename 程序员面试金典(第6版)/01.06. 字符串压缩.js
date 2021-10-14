const compressString = S => {
    // 将第一个字符放入数组，并设其个数为1
    const arr = [S[0], 1];
    const len = S.length;
    for (let i = 1; i < len; i++) {
        if (S[i] === S[i - 1]) {
            // 如果当前字符和前一个字符相等，则数量+1
            arr[arr.length - 1]++;
        } else {
            // 不相等，将当前字符和数量放入数组末尾
            arr.push(S[i], 1);
        }
    }
    return arr.length < len ? arr.join('') : S;
};
