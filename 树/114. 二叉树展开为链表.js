const flatten = root => {
    let p;
    while (root) {
        p = root.left;
        if (p) {
            while (p.right) p = p.right;
            p.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
    return root;
};
