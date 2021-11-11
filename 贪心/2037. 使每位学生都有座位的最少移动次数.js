const minMovesToSeat = (seats, students) => {
    let count = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    const len = seats.length;
    for (let i = 0; i < len; i++) {
        count += Math.abs(seats[i] - students[i]);
    }
    return count;
};
