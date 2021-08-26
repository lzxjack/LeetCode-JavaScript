const numRescueBoats = (people, limit) => {
    // 升序排序
    people.sort((a, b) => a - b);
    // 人数
    const len = people.length;
    // 初始化头尾指针
    let [i, j] = [0, len - 1];
    // 最小船只数，初始等于人数
    // 最初情况：每只船带1人
    let min = len;

    while (i < j) {
        if (people[i] + people[j] <= limit) {
            // 若两指针对应的重量满足条件，则可带2人
            // 说明可节约1只船，则min--
            min--;
            // i右移
            i++;
        }
        // 若满足条件，j要左移
        // 若不满足条件，当前船只能带1人，没有节约船只，min不用变，j还是要左移
        j--;
    }

    return min;
};
