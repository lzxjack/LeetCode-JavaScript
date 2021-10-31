const isHappy = n => {
    const set = new Set();
    let num = n;
    while (true) {
        const strNum = `${num}`;
        const len = strNum.length;
        let newN = 0;
        for (let i = 0; i < len; i++) {
            newN += Number(strNum[i]) ** 2;
        }
        if (newN === 1) return true;
        if (set.has(newN)) return false;
        set.add(newN);
        num = newN;
    }
};
