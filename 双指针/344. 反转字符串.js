const reverseString = s => {
    // 定义头尾双指针
    let [left, right] = [0, s.length - 1];
    while (left < right) {
        // 交换两头的字符
        [s[left], s[right]] = [s[right], s[left]];
        // 左指针右移，右指针左移
        left++;
        right--;
    }
    return s;
};
