// 深度优先遍历
// var cloneGraph = function(node) {
//     if (!node) return;
//     const visited = new Map();
//     const dfs = n => {
//         // console.log(n.val);
//         const nCopy = new Node(n.val);
//         visited.set(n, nCopy);
//         (n.neighbors || []).forEach(ne => {
//             if (!visited.has(ne)) {
//                 dfs(ne);
//             }
//             nCopy.neighbors.push(visited.get(ne));
//         })
//     }
//     dfs(node);
//     return visited.get(node);
// };


// 广度优先遍历
var cloneGraph = function(node) {
    if (!node) return;
    const visited = new Map();
    visited.set(node, new Node(node.val));
    const q = [node];
    while (q.length) {
        const n = q.shift();
        console.log(n.val);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        });
    }
    return visited.get(node);
};