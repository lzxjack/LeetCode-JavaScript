// 如果链表一样长且有交点，则第一次遍历就能找到交点，返回
// 如果不一样长且有交点，则第二次遍历就能找到交点，返回
// 如果没有交点，则第二次遍历结束都是null，遍历结束，返回null

const getIntersectionNode = (A, B) => {
    let [pA, pB] = [A, B];
    while (pA !== pB) {
        pA = pA === null ? B : pA.next;
        pB = pB === null ? A : pB.next;
    }
    return pA;
};
