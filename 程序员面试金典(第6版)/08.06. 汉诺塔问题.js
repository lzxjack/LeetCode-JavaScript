const hanota = (A, B, C) => {
    const n = A.length;
    // 将A中的n个移动到C
    const move = (n, A, B, C) => {
        if (n === 1) {
            C.push(A.pop());
            return;
        }
        // 将A中的n-1个移动到B
        move(n - 1, A, C, B);
        // 将A剩余的一个移动到C
        C.push(A.pop());
        // 将B中的n-1个移动到C
        move(n - 1, B, A, C);
    };
    move(n, A, B, C);
};
