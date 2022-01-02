const asteroidsDestroyed = (mass, asteroids) => {
    asteroids.sort((a, b) => a - b);
    let num = mass;
    const len = asteroids.length;
    for (let i = 0; i < len; i++) {
        if (num < asteroids[i]) return false;
        num += asteroids[i];
    }
    return true;
};
