const getHint = (secret, guess) => {
    // 都转化为数组
    const secretArr = secret.split('');
    const guessArr = guess.split('');
    // A和B的数量
    let [A, B] = [0, 0];
    const len = guess.length;
    for (let i = 0; i < len; i++) {
        // 先找统计A的个数
        if (guess[i] === secretArr[i]) {
            // 找到了一个A，将两个对应位置都设为null
            A++;
            secretArr[i] = null;
            guessArr[i] = null;
        }
    }
    // 遍历guessArr
    for (let i = 0; i < len; i++) {
        // 若遇到null，说明此处是A，跳过
        if (!guessArr[i]) continue;
        if (secretArr.indexOf(guessArr[i]) !== -1) {
            // 找到了一个B，secretArr的对应位置设为null，避免重复
            B++;
            secretArr[secretArr.indexOf(guessArr[i])] = null;
        }
    }
    return `${A}A${B}B`;
};
