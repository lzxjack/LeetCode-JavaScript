const addSpaces = (s, spaces) => {
    let res = '';
    // 在需要添加空格的下标做标记
    const arr = [];
    for (let i = 0; i < spaces.length; i++) {
        arr[spaces[i]] = 1;
    }
    for (let i = 0; i < s.length; i++) {
        // 遇到标记，添加空格
        if (arr[i]) res += ' ';
        res += s[i];
    }
    return res;
};
