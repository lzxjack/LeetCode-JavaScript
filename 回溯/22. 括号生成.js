const generateParenthesis = n => {
    // left:剩余的左括号数量，right:剩余的右括号数量
    const getParenthesis = (str, left, right) => {
        if (!left && !right) {
            // 两个都用完了，加入答案数组
            res.push(str);
            return;
        }
        if (left === right) {
            // 剩余数目相等，下一个只能是左括号了
            getParenthesis(`${str}(`, left - 1, right);
        } else if (left < right) {
            // 右括号多，下一个可以左括号，也可以右括号
            if (left > 0) getParenthesis(`${str}(`, left - 1, right);
            // right数量不用判断，因为left最小是0，right到0的时候，已经return了
            getParenthesis(`${str})`, left, right - 1);
        }
    };

    const res = [];
    getParenthesis('', n, n);
    return res;
};
