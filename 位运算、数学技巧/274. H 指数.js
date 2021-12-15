const hIndex = citations => {
    citations.sort((a, b) => b - a);
    let [h, i] = [0, 0];
    const len = citations.length;
    while (i < len && citations[i] > h) {
        h++;
        i++;
    }
    return h;
};
