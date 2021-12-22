const compress = chars => {
    // write:写指针
    // left:标记当前组的最左侧
    let [write, left] = [0, 0];
    const len = chars.length;
    // i:写指针
    for (let i = 0; i < len; i++) {
        // 到达尽头，或当前组的最右侧
        if (i === len - 1 || chars[i] !== chars[i + 1]) {
            // 更新写指针对用的值，并右移
            chars[write++] = chars[i];
            // 当前字符的数量
            let num = i - left + 1;
            // 更新下一组字符最左侧的位置
            left = i + 1;
            if (num > 1) {
                // num>1,后面需要跟上当前字符的数量
                // 起点是写指针初始的起点
                const start = write;
                // 不断取得个位数，拼接到字符后面
                while (num > 0) {
                    chars[write++] = `${num % 10}`;
                    num = Math.floor(num / 10);
                }
                // 拼接的数字，需要反转
                reverse(chars, start, write - 1);
            }
        }
    }
    // 遍历结束后，write指向新数组的终点的下一位，所以新数组长度就是write
    return write;
};

const reverse = (chars, left, right) => {
    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        right--;
        left++;
    }
};
