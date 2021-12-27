// 周赛T3
const getDistances = arr => {
    const map = {};
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (!map[arr[i]]) map[arr[i]] = [];
        map[arr[i]].push(i);
    }
    const keys = Object.keys(map);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
        const index = map[keys[i]];
        let j = 0;
        let [left, right] = [0, 0];
        while (j < index.length) {
            if (j === 0) {
                for (let k = 0; k < index.length; k++) {
                    right += index[k] - index[0];
                }
            } else {
                right -= (index[j] - index[j - 1]) * (index.length - j);
                left += (index[j] - index[j - 1]) * j;
            }
            res[index[j]] = right + left;
            j++;
        }
    }
    return res;
};
