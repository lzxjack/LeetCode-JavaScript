const maxArea = height => {
    // 定义两个指针，分别指向头尾
    let [m, n] = [0, height.length - 1];
    // 定义最大区域
    let maxArea = 0;
    // 若m=n，则面积为0，所以不取等于
    while (m < n) {
        // 当前有效面积的高
        const h = Math.min(height[m], height[n]);
        // 当前面积
        const area = (n - m) * h;
        // 更新最大面积
        maxArea = Math.max(maxArea, area);
        // 更新指针
        if (height[m] < height[n]) {
            // 左指针对应的值小，左指针右移
            m++;
        } else {
            // 右指针对应的值小，右指针左移
            n--;
        }
    }
    return maxArea;
};
