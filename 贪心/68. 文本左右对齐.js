// 生成n个空格的字符串
const blank = n => new Array(n).fill(' ').join('');

const fullJustify = (words, maxWidth) => {
    const res = [];
    let [right, n] = [0, words.length];
    while (true) {
        // 当前行的第一个单词在 words 的位置
        const left = right;
        // 统计这一行单词长度之和
        let sumLen = 0;
        while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
            sumLen += words[right].length;
            right++;
        }

        // 1. 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
        if (right === n) {
            const s = words.slice(left).join(' ');
            res.push(s + blank(maxWidth - s.length));
            break;
        }
        const numWords = right - left;
        const numSpaces = maxWidth - sumLen;

        // 2. 当前行只有一个单词：该单词左对齐，在行末填充空格
        if (numWords === 1) {
            res.push(words[left] + blank(numSpaces));
            continue;
        }

        // 3. 当前行不只一个单词
        const avgSpaces = Math.floor(numSpaces / (numWords - 1));
        const extraSpaces = numSpaces % (numWords - 1);
        // 拼接额外加一个空格的单词
        const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1));
        // 拼接其余单词
        const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces));
        res.push(s1 + blank(avgSpaces) + s2);
    }
    return res;
};
