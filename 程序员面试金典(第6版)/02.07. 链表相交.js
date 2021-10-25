const getIntersectionNode = (A, B) => {
    let pA = A,
        pB = B;
    while (pA !== pB) {
        pA = pA === null ? B : pA.next;
        pB = pB === null ? A : pB.next;
    }
    return pA;
};
