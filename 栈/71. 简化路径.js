const simplifyPath = path => {
    const stack = [];
    const arr = path.split('/');
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === '' || arr[i] === '.') continue;
        if (arr[i] === '..') {
            if (stack.length) stack.pop();
            continue;
        }
        stack.push(arr[i]);
    }
    const res = stack.join('/');
    return `/${res}`;
};
