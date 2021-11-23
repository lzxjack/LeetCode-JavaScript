// const isSubsequence = (s, t) => {
//     // 如果s为空，直接返回true
//     if (s.length === 0) return true;
//     // 定义两个指针
//     let indexS = 0,
//         indexT = 0;
//     // 遍历t
//     while (indexT < t.length) {
//         // 如果两个当前两指针值相等，indexS右移
//         // 并判断s是否遍历结束，若结束就返回true
//         if (s[indexS] === t[indexT]) {
//             indexS++;
//             if (indexS > s.length - 1) return true;
//         }
//         // indexT右移
//         indexT++;
//     }
//     // 遍历t遍历完成，还没有返回true，就返回false
//     return false;
// };

const isSubsequence = (s, t) => {
    // s、t的长度
    const [m, n] = [s.length, t.length];
    // dp全初始化为0
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 更新dp[i][j]，两种情况
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    // 遍历结束，判断dp右下角的数是否等于s的长度
    return dp[m][n] === m ? true : false;
};
