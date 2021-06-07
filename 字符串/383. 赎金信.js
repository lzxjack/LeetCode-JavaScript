const canConstruct = (ransomNote, magazine) => {
    const len = ransomNote.length;
    for (let i = 0; i < len; i++) {
        // 当前赎金信字符
        const s = ransomNote[i];
        // 如果在杂志没找到，直接返回false
        if (magazine.indexOf(s) === -1) return false;
        // 若找到，将该字符删去
        magazine = magazine.replace(s, '');
    }
    // 遍历完成，还没返回false，就返回true
    return true;
};

console.log(canConstruct('asd', 'asdf'));
