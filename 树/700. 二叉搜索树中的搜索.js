// const searchBST = (root, val) => {
//     while (root) {
//         if (root.val === val) return root;
//         root = root.val > val ? root.left : root.right;
//     }
//     return null;
// };

const searchBST = (root, val) => {
    if (!root) return null;
    if (root.val > val) {
        return searchBST(root.left, val);
    } else if (root.val < val) {
        return searchBST(root.right, val);
    } else {
        return root;
    }
};
