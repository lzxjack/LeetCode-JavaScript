const groupAnagrams = strs => {
    // 创建map
    const map = new Map();
    // 遍历字符串数组
    strs.forEach(str => {
        // 对每个字符进行排序
        const newStr = str.split('').sort().join('');
        // 如果map中没有对应的键，创建该键，并设置值为空数组
        if (!map.get(newStr)) map.set(newStr, []);
        // 将没排序的字符推入相应键中
        map.get(newStr).push(str);
    });
    const res = [];
    // 遍历map，根据键，放入res
    map.forEach(item => res.push(item));
    return res;
};
