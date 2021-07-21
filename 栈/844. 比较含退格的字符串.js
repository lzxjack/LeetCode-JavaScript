const backspaceCompare = (S, T) => {
    const forMat = str => {
        const stack = [];
        for (const i of str) {
            if (i === '#') stack.pop();
            else stack.push(i);
        }
        return stack.join('');
    };
    return forMat(S) === forMat(T);
};

// console.log('ab#c', 'ad#c');
console.log(backspaceCompare('ab#c', 'ad#c'));
