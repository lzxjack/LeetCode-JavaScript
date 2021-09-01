const compareVersion = (version1, version2) => {
    const [v1, v2] = [version1.split('.'), version2.split('.')];
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1 = v1[i] ? parseInt(v1[i]) : 0;
        const num2 = v2[i] ? parseInt(v2[i]) : 0;
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};
