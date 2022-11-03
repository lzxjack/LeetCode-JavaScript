const point = (x, y) => 10001 * x + y;

const isRectangleCover = rectangles => {
    let x = 10001,
        y = 10001,
        a = -10001,
        b = -10001,
        s = 0;
    cnts = new Map();
    for (const r of rectangles) {
        x = Math.min(x, r[0]);
        y = Math.min(y, r[1]);
        a = Math.max(a, r[2]);
        b = Math.max(b, r[3]);
        s += (r[3] - r[1]) * (r[2] - r[0]);
        const p1 = point(r[0], r[1]),
            p2 = point(r[0], r[3]),
            p3 = point(r[2], r[1]),
            p4 = point(r[2], r[3]);
        if (cnts.has(p1)) cnts.set(p1, cnts.get(p1) + 1);
        else cnts.set(p1, 1);
        if (cnts.has(p2)) cnts.set(p2, cnts.get(p2) + 1);
        else cnts.set(p2, 1);
        if (cnts.has(p3)) cnts.set(p3, cnts.get(p3) + 1);
        else cnts.set(p3, 1);
        if (cnts.has(p4)) cnts.set(p4, cnts.get(p4) + 1);
        else cnts.set(p4, 1);
    }
    if (s != (a - x) * (b - y)) return false;
    const points = new Set();
    points.add(point(x, y));
    points.add(point(x, b));
    points.add(point(a, y));
    points.add(point(a, b));
    for (const p of points) {
        if (!cnts.has(p) || cnts.get(p) != 1) {
            return false;
        }
    }
    for (const p of cnts.keys()) {
        if (!points.has(p)) {
            const v = cnts.get(p);
            if (v > 4 || v % 2 != 0) return false;
        }
    }
    return true;
};
