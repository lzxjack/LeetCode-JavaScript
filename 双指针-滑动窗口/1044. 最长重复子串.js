const longestDupSubstring = s => {
    let maxStr = '',
        curStr = '';
    const len = s.length;
    for (let i = 0, j = 0; i < len; i++) {
        curStr = curStr.replace(s[i - 1], '');
        while (curStr.length <= maxStr.length && j < s.length) {
            curStr += s[j++];
            if (curStr.length > maxStr.length && s.lastIndexOf(curStr) > i) maxStr = curStr;
        }
    }
    return maxStr;
};
