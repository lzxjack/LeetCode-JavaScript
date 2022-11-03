const sumOddLengthSubarrays = arr => {
    const len = arr.length;
    // 原地修改，计算前缀和
    for (let i = 1; i < len; i++) {
        arr[i] += arr[i - 1];
    }
    // 定义返回值，初始为0
    let res = 0;
    // 定义左边界
    for (let i = 0; i < len; i++) {
        // 定义右边界，因为长度奇数，j每次+2
        for (let j = i; j < len; j += 2) {
            // 此时arr已经是前缀和
            // i!==0, [i,j]区间内的长度和 = arr[j] - arr[i - 1]
            // i===0, [i,j]区间内的长度和 = arr[j]
            res += arr[j] - (arr[i - 1] || 0);
        }
    }
    return res;
};
