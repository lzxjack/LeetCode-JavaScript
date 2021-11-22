const wateringPlants = (plants, capacity) => {
    let step = 0;
    const max = capacity;
    const len = plants.length;
    for (let i = 0; i < len; i++) {
        if (capacity < plants[i]) {
            // 水不够了，充满
            capacity = max;
            // 加上来回的步数
            step += 2 * i;
        }
        // 浇水
        capacity -= plants[i];
        // 加步数
        step++;
    }
    return step;
};
