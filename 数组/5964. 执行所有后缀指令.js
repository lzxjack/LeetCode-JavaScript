const executeInstructions = (n, startPos, s) => {
    const res = [];
    let count, i, j;
    // 转化为数组
    const temp = s.split('');
    // 按起点遍历
    while (temp.length) {
        // 归零
        count = 0;
        // 起点位置
        [i, j] = startPos;
        for (let k = 0; k < temp.length; k++) {
            // 根据方向位移
            if (temp[k] === 'R') {
                j++;
                count++;
            } else if (temp[k] === 'D') {
                i++;
                count++;
            } else if (temp[k] === 'L') {
                j--;
                count++;
            } else if (temp[k] === 'U') {
                i--;
                count++;
            }
            // 若越界，减回去，并放入res，跳出循环
            if (i < 0 || j < 0 || i >= n || j >= n) {
                count--;
                res.push(count);
                break;
            }
            // 遍历到最后一个，正常放入res
            if (k === temp.length - 1) res.push(count);
        }
        // 遍历完，头部元素弹出
        temp.shift();
    }
    return res;
};
