/**
 * @param {string} s
 * @return {boolean}
 */

// 构建图， 遍历字符串， 沿着图走， 若无路可走返回false。
// 遍历结束时， 若最终是3、 5、 6， 返回true， 否则返回false
var isNumber = function(s) {
    const graph = {
        0: { 'blank': 0, 'sigh': 1, '.': 2, 'digit': 6 },
        1: { 'digit': 6, '.': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sigh': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, '.': 3, 'e': 4 },
        7: { 'digit': 5 }
    };
    let state = 0;
    for (c of s.trim().toLowerCase()) {
        if (c >= '0' && c <= '9') {
            c = 'digit';
        } else if (c === ' ') {
            c = 'blank';
        } else if (c === '+' || c === '-') {
            c = 'sigh';
        }
        state = graph[state][c];
        if (state === undefined) {
            return false;
        }
    }
    if (state === 3 || state === 5 || state === 6) {
        return true;
    }
    return false;
};