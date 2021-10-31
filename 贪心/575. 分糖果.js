const distributeCandies = candies => {
    // 糖果种类数
    const count = new Set(candies).size;
    // 取糖果种类数和糖果数一半的较小者
    return Math.min(count, candies.length >> 1);
};
