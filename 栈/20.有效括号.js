// No.20

const isValid = s => {
    const len = s.length;
    if (len % 2 === 1) return false;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            const top = stack[stack.length - 1];
            if (
                (top === '(' && s[i] === ')') ||
                (top === '[' && s[i] === ']') ||
                (top === '{' && s[i] === '}')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
