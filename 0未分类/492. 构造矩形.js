const constructRectangle = area => {
    let L = Math.ceil(Math.sqrt(area));
    while (area % L) L++;
    return [L, area / L];
};
