const distributeCandies = candies => {
    const count = new Set(candies).size;
    return Math.min(count, candies.length / 2);
};
