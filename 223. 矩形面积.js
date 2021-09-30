const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
    // 两矩形在x轴的投影长度
    const x = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    // 两矩形在y轴的投影长度
    const y = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
    // 两矩形的重叠面积
    const double = x * y;
    // a面积
    const aS = Math.abs((ax2 - ax1) * (ay2 - ay1));
    // b面积
    const bS = Math.abs((bx2 - bx1) * (by2 - by1));
    return aS + bS - double;
};
