const findMode = root => {
    let [base, count, maxCount] = [0, 0, 0];
    let res = [];

    const update = x => {
        if (x === base) {
            count++;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            res.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            res = [base];
        }
    };
    const dfs = root => {
        if (!root) {
            return;
        }
        dfs(root.left);
        update(root.val);
        dfs(root.right);
    };
    dfs(root);
    return res;
};
