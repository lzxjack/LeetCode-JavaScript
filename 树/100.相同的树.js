var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (p && q && p.val === q.val &&
        isSameTree(q.left, p.left) &&
        isSameTree(q.right, p.right)) {
        return true;
    }
    return false;
};