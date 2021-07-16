const matrixReshape = (mat, r, c) => {
    const newMat = [];
    // 将二维数组转化为一维数组
    for (let i = 0; i < mat.length; i++) {
        newMat.push(...mat[i]);
    }
    // 判断能否重塑成功
    if (r * c !== newMat.length) return mat;
    // 一共有r行
    for (let i = 0; i < r; i++) {
        const item = [];
        // 每行c个
        for (let j = 0; j < c; j++) {
            // 将c个元素从头部拿出，并放入暂存的item数组
            item.push(newMat.shift(newMat[i]));
        }
        // 当前行收集完毕，推入新数组的尾部
        newMat.push(item);
    }
    return newMat;
};
