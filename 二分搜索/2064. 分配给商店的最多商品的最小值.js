const minimizedMaximum = (n, quantities) => {
    const len = quantities.length;
    // 检验每间店铺装num个，n个店铺是否装得下的函数
    const check = num => {
        let count = 0;
        // 统计每间店铺装num个，装完所有商品，需要多少间店铺
        for (let i = 0; i < len; i++) {
            // 当前种类的商品，需要多少间店铺
            count += Math.ceil(quantities[i] / num);
        }
        // 若店铺总数小于给定的n，则表示每间店铺装num个是可以装得下的
        return count <= n;
    };
    // 每间店铺装的最大数量不可能取到0，最小为1
    // 每间店铺装的最大数量最大是数量最多的商品种类的数量
    let [left, right] = [1, Math.max(...quantities)];
    while (left <= right) {
        // 每间店铺装mid个
        const mid = (left + right) >> 1;
        if (check(mid)) {
            // 装得下，减小每间店铺装的数量
            right = mid - 1;
        } else {
            // 装不下，增加每间店铺装的数量
            left = mid + 1;
        }
    }
    return left;
};
