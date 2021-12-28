const trap = height => {
    let count = 0;
    let [left, right] = [0, height.length - 1];
    let [leftMax, rightMax] = [0, 0];
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax < rightMax) {
            count += leftMax - height[left++];
        } else {
            count += rightMax - height[right--];
        }
    }
    return count;
};
