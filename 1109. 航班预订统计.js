// const corpFlightBookings = (bookings, n) => {
//     const len = bookings.length;
//     const list = new Array(len).fill(0).map(x => new Array(n).fill(0));
//     for (let i = 0; i < len; i++) {
//         const [start, end] = [bookings[i][0] - 1, bookings[i][1] - 1];
//         const nums = bookings[i][2];
//         for (let j = start; j <= end; j++) {
//             list[i][j] = nums;
//         }
//     }
//     const res = [];
//     for (let i = 0; i < n; i++) {
//         let count = 0;
//         for (let j = 0; j < len; j++) {
//             count += list[j][i];
//         }
//         res.push(count);
//     }
//     return res;
// };

const corpFlightBookings = (bookings, n) => {
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        // 取出起点、终点、数量
        const [start, end, num] = booking;
        // 因为起点从1开始，所以登机的数量在start - 1出多num
        nums[start - 1] += num;
        // 如果还没到终点站，在end处有num人下机
        if (end < n) nums[end] -= num;
    }
    // 求前缀和
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
