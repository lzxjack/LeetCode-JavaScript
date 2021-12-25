const multiply = (A, B) => {
    if (!A || !B) return 0;
    if (A < B) return B + multiply(A - 1, B);
    return A + multiply(A, B - 1);
};
