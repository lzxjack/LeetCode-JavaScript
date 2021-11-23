const sortArrayByParity = nums => {
    // 定义头尾双指针
    let [i, j] = [0, nums.length - 1];

    while (i < j) {
        // 左指针的是偶数，左指针右移
        if (!(nums[i] % 2)) i++;

        // 右指针的是奇数，右指针左移
        if (nums[j] % 2) j--;

        if (i < j && nums[i] % 2 && !(nums[j] % 2)) {
            // 左指针的是奇数，且右指针的是偶数，交换对应的数
            [nums[i], nums[j]] = [nums[j], nums[i]];
            // 左指针右移，右指针左移
            i++;
            j--;
        }
    }

    return nums;
};
