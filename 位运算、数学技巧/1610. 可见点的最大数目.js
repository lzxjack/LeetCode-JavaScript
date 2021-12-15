const visiblePoints = (points, angle, location) => {
    const calc = (x, y) => (Math.atan2(y - location[1], x - location[0]) * 180) / Math.PI;

    let self = 0;
    let ret = 0;
    let angles = [];

    for (const [x, y] of points) {
        if (x === location[0] && y === location[1]) {
            self++;
        } else {
            const rad = calc(x, y);
            angles.push(rad);
        }
    }

    angles.sort((a, b) => a - b);
    angles = angles.concat(angles.map(a => a + 360));

    for (let l = 0, r = 0; r < angles.length; r++) {
        while (l < r && angles[r] - angles[l] > angle) {
            l++;
        }
        ret = Math.max(ret, r - l + 1);
    }
    return ret + self;
};
