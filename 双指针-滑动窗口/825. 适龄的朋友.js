const numFriendRequests = ages => {
    ages.sort((a, b) => a - b);
    let [left, right] = [0, 0];
    let count = 0;
    const len = ages.length;
    for (const age of ages) {
        // 年龄小于15的不用考虑
        if (age <= 14) continue;
        // 一直到左边界不满足条件1为止
        while (ages[left] <= 0.5 * age + 7) left++;
        // 若下一个age不满足条件2，一直右移
        while (right + 1 < len && ages[right + 1] <= age) right++;
        // 本来是right - left + 1，由于不会向自己发送，减去自己
        count += right - left;
    }
    return count;
};
