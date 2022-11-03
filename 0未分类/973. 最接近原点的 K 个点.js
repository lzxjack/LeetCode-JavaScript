const kClosest = (points, k) => {
    const sort = points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2));
    return sort.slice(0, k);
};
