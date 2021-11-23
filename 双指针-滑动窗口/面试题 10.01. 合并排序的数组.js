const merge = (A, m, B, n) => {
    // 初始化三个指针
    let [i, j, k] = [m - 1, n - 1, m + n - 1];
    while (i >= 0 || j >= 0) {
        // 指针i、j对应的数分别为a、b
        const a = i < 0 ? -Infinity : A[i];
        const b = j < 0 ? -Infinity : B[j];
        if (a > b) {
            // a大，则a放入k的位置
            // i左移
            A[k] = a;
            i--;
        } else {
            // b大，则b放入k的位置
            // j左移
            A[k] = b;
            j--;
        }
        // k左移
        k--;
    }
    return A;
};
