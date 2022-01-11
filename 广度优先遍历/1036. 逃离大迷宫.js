// hard
const isEscapePossible = (blocked, source, target) => {
    const blockLen = blocked.length;
    if (blockLen === 0) {
        return true;
    }

    const startVisited = new Set();
    const endVisited = new Set();
    const M = 10 ** 6 - 1;
    const startQueue = [];
    const endQueue = [];

    startQueue.push(source);
    endQueue.push(target);
    startVisited.add(source.join('$'));
    endVisited.add(target.join('$'));

    while (startQueue.length && endQueue.length) {
        if (startQueue.length > blockLen && endQueue.length > blockLen) {
            return true;
        }
        if (endQueue.some(([i, j]) => startQueue.some(([m, n]) => i === m && j === n))) {
            return true;
        }
        addNode(startQueue, startVisited);
        addNode(endQueue, endVisited);
    }

    return false;

    function addNode(queue, visited) {
        const dir = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
        ];
        for (let i = queue.length - 1; i >= 0; i--) {
            const [r, c] = queue.shift();
            for (let d = 0; d < 4; d++) {
                const m = dir[d][0] + r;
                const n = dir[d][1] + c;
                if (
                    m < 0 ||
                    n < 0 ||
                    m >= M ||
                    n >= M ||
                    blocked.some(([i, j]) => i === m && j === n) ||
                    visited.has(m + '$' + n)
                ) {
                    continue;
                }
                queue.push([m, n]);
                visited.add(m + '$' + n);
            }
        }
    }
};
