const minRemoveToMakeValid = s => {
    const stack = [];
    const res = s.split('');
    const len = res.length;
    for (let i = 0; i < len; i++) {
        if (res[i] === '(') stack.push(i);
        if (res[i] === ')') {
            if (stack.length > 0) {
                // 若栈中有值，说明之前有落单左括号
                // 刚好匹配右括号，作一次抵消
                stack.pop();
            } else {
                // 栈中无值，说明之前没有落单的左括号了
                // 当前右括号是多余的，删除
                res[i] = '';
            }
        }
    }
    // 栈中剩下的值，是所有落单的左括号
    const lenStack = stack.length;
    for (let i = 0; i < lenStack; i++) {
        // 将落单的左括号删除
        res[stack[i]] = '';
    }
    return res.join('');
};
