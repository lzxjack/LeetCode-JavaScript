const numWaterBottles = (numBottles, numExchange) => {
    // 总共能喝几瓶
    let res = 0;
    // 空瓶能换几瓶
    let count = 0;
    while (numBottles >= numExchange) {
        // 当前瓶数喝完之后，能换count瓶酒
        count = Math.floor(numBottles / numExchange);
        // 先把能换这些酒喝了
        res += count * numExchange;
        // 剩余的酒 = 原来的酒 - 喝掉的酒 + 换来的count瓶酒
        numBottles = numBottles - count * numExchange + count;
    }
    // 最后剩下的酒不能在换新酒了，默默喝掉
    res += numBottles;
    return res;
};
