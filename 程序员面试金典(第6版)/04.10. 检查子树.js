const checkSubTree = (t1, t2) => {
    // t2空
    if (!t2) return true;
    // 若t2不为空，t1为空
    if (!t1) return false;
    if (t1.val === t2.val) {
        return checkSubTree(t1.left, t2.left) && checkSubTree(t1.right, t2.right);
    } else {
        return checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
    }
};
