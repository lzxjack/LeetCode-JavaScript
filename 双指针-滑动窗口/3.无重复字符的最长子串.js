// 双指针
const lengthOfLongestSubstring = s => {
    // 左指针
    let left = 0;
    // 初始化最大长度
    let maxlen = 0;
    const map = new Map();
    // 定义右指针。遍历字符串
    for (let right = 0; right < s.length; right++) {
        // 如果右指针指向的字符在map中，并且右指针索引大于左指针索引
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            // 将左指针移动到重复字符的下一位
            left = map.get(s[right]) + 1;
        }
        // 更新最大长度
        maxlen = Math.max(maxlen, right - left + 1);
        // 存右指针的值和对应索引
        map.set(s[right], right);
    }
    return maxlen;
};

const lengthOfLongestSubstring = s => {
    // 滑动窗口初始化为一个空数组
    let arr = [];
    // 要返回的字符串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        // 使用 indexOf 判断是否在数组中出现过
        let index = arr.indexOf(s[i]);
        // 如果出现过
        if (index !== -1) {
            // 从数组开头到当前字符串全部截取掉
            arr.splice(0, index + 1);
        }
        // 在窗口右边放进新的字符
        arr.push(s[i]);
        // 更新下最大值
        max = Math.max(arr.length, max);
    }
    // 返回
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
