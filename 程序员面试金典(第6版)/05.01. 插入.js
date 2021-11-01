const insertBits = (N, M, i, j) => {
    // 将N、M转化为二进制数组，并反转
    const arrN = N.toString(2).split('').reverse();
    const arrM = M.toString(2).split('').reverse();
    // 要替换的总长度
    const len = j - i + 1;
    // 若arrM的长度小于替换的总长度，在arrM后面补零
    const lenM = arrM.length;
    for (let i = lenM; i < len; i++) {
        arrM[i] = '0';
    }
    // 在arrN的i位置，删除len个元素，再在同位置添加arrM的元素
    arrN.splice(i, len, ...arrM);
    // 将arrN反转回来，转化为字符串，再转化为十进制
    return parseInt(arrN.reverse().join(''), 2);
};
