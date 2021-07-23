const isCovered = (ranges, left, right) => {
    for (let i = left; i <= right; i++) {
        // 每个i是否被覆盖的标志位
        let flag = false;
        // 遍历每个ranges中每个区间
        for (const arr of ranges) {
            // 如果当前i被覆盖了，flag为true，不用再遍历区间了
            if (arr[0] <= i && i <= arr[arr.length - 1]) {
                flag = true;
                break;
            }
        }
        // 当前i被覆盖，直接进入下一循环
        if (flag) {
            continue;
        } else {
            // 否则当前i没被覆盖，返回false
            return false;
        }
    }
    return true;
};
