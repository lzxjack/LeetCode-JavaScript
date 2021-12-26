const findAllRecipes = (recipes, ingredients, supplies) => {
    const res = [];
    const len = recipes.length;

    let count = supplies.length;
    while (count--) {
        for (let i = 0; i < len; i++) {
            if (ingredients[i].every(item => supplies.includes(item))) {
                res.push(recipes[i]);
                supplies.push(recipes[i]);
            }
        }
    }

    return [...new Set(res)];
};
