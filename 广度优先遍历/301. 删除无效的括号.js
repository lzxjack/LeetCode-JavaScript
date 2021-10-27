// 判断是否是有效括号字符串的函数
const isValid = s => {
    let count = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            count++;
        } else if (s[i] === ')') {
            count--;
        }
        // 若count<0，说明右括号在左括号前面出现
        // 那肯定是false了
        if (count < 0) return false;
    }
    return count === 0;
};

const removeInvalidParentheses = s => {
    const res = [];
    const queue = [s];
    const set = new Set();

    while (1) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            item = queue.shift();
            if (isValid(item)) {
                // 如果发现有效字符串，放入res
                res.push(item);
            } else if (!res.length) {
                // 遍历这个无效字符串
                for (let j = 0; j < item.length; j++) {
                    if (item[j] === '(' || item[j] === ')') {
                        // 每出现一次括号，就进行判断，若没有重复，就将其再入列
                        // 以便之后判断是否是有效的
                        const str = item.slice(0, j) + item.slice(j + 1);
                        if (!set.has(str)) {
                            queue.push(str);
                            set.add(str);
                        }
                    }
                }
            }
        }
        // 因为要删除最小数量的无效括号
        // 所以一旦出现有效字符串，退出循环
        if (res.length) break;
    }
    return res;
};
