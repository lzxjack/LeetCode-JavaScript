const slowestKey = (releaseTimes, keysPressed) => {
    // 当前字母时间、最大时间
    let [time, maxTime] = [0, 0];
    // 当前字母、最大时间的字母
    let [curKey, res] = ['', ''];
    const len = releaseTimes.length;
    for (let i = 0; i < len; i++) {
        // 当前字母
        curKey = keysPressed[i];
        // 当前字母时间
        time = releaseTimes[i] - (releaseTimes[i - 1] || 0);
        // 两种情况更新:
        // 1. 当前时间超过最大时间
        // 2. 当前时间等于最大时间，但当前字母比最大时间的字母大
        if (time > maxTime || (time === maxTime && res < curKey)) {
            maxTime = time;
            res = curKey;
        }
    }
    return res;
};
