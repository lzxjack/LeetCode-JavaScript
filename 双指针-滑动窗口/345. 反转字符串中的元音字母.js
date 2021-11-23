// ### 解题思路
// 1. 写一个函数专门判断当前字母是否是元音字母
// 2. 定义头尾双指针，分别从两头遍历，并判断是否是元音字母
// 3. 若左指针的值不是元音字母，左指针右移，结束当前循环，进入下一轮。一直找到元音字母为止
// 4. 右指针同理
// 5. 最后返回即可

// ### 代码
const reverseVowels = s => {
    const isTarget = s =>
        s === 'a' ||
        s === 'e' ||
        s === 'i' ||
        s === 'o' ||
        s === 'u' ||
        s === 'A' ||
        s === 'E' ||
        s === 'I' ||
        s === 'O' ||
        s === 'U';

    // 字符串转化为数组
    s = s.split('');
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        if (!isTarget(s[left])) {
            left++;
            continue;
        }
        if (!isTarget(s[right])) {
            right--;
            continue;
        }
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    // 转回字符串并返回
    return s.join('');
};
