const compareVersion = (version1, version2) => {
    // 使用'.'将版本号分割成为数组
    const [v1, v2] = [version1.split('.'), version2.split('.')];
    // 取两者长度的最大值
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        // 数组元素逐个转换成数字，比较大小
        // 数组若越界，则定义为0
        const num1 = v1[i] ? parseInt(v1[i]) : 0;
        const num2 = v2[i] ? parseInt(v2[i]) : 0;
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    // 还没有返回，说明两者相等
    return 0;
};
