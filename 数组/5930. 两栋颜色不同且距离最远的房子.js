const maxDistance = colors => {
    let max = 0;
    const len = colors.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (colors[i] !== colors[j]) {
                max = Math.max(max, Math.abs(i - j));
            }
        }
    }
    return max;
};
