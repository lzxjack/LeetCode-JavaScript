const poorPigs = (buckets, minutesToDie, minutesToTest) => {
    const base = Math.floor(minutesToTest / minutesToDie) + 1;
    return Math.ceil(Math.log(buckets) / Math.log(base));
};
