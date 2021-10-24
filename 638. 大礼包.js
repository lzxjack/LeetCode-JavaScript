const shoppingOffers = (price, special, needs) => {
    const cache = new Map();

    const dfs = remain => {
        let ans = 0;
        const len = remain.length;
        for (let i = 0; i < len; i++) ans += price[i] * remain[i];
        if (ans !== 0) {
            const key = remain.join('#');
            if (cache.has(key)) ans = cache.get(key);
            else {
                for (const sp of special) {
                    let check = true;
                    for (let i = 0; i < len; i++)
                        if (sp[i] > remain[i]) {
                            check = false;
                            break;
                        }
                    if (check) {
                        const next = [];
                        for (let i = 0; i < len; i++) next.push(remain[i] - sp[i]);
                        ans = Math.min(ans, dfs(next) + sp[sp.length - 1]);
                    }
                }
                cache.set(key, ans);
            }
        }
        return ans;
    };

    return dfs(needs);
};
