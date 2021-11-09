const findMinStep = (board, hand) => {
    const traverse = (now_index, depth, path, now_board) => {
        let same_count = 1;
        let same_index = 0;

        for (let i = 1; i < now_board.length; i++) {
            if (now_board.length < 3) break;
            if (now_board[i] === now_board[i - 1]) same_count++;
            else {
                same_index = i;
                same_count = 1;
            }
            if (same_count === 3) {
                while (now_board[i] === now_board[i + 1]) {
                    i++;
                    same_count++;
                }
                now_board.splice(same_index, same_count);

                i = same_index - 2 > 0 ? same_index - 3 : 0;
                same_index = i;
                same_count = 1;
            }
        }

        if (now_board.length === 0) {
            if (res !== -1) res = Math.min(res, path.length);
            else res = path.length;
            return;
        }

        if (path.length === now_hand.length) return;

        for (let i = now_index; i < now_hand.length; i++) {
            path.push(now_hand[i]);
            for (let j = 0; j <= now_board.length; j++) {
                if (now_hand[i] === now_board[j]) continue;
                now_board.splice(j, 0, now_hand[i]);
                traverse(i + 1, depth + 1, path, [...now_board]);
                now_board.splice(j, 1);
            }
            path.pop();
            if (now_hand.lastIndexOf(now_hand[i]) !== i) {
                i = now_hand.lastIndexOf(now_hand[i]);
            }
        }
    };

    now_board = board.split('');
    now_hand = hand.split('').sort();
    let res = -1;
    traverse(0, 0, [], [...now_board]);
    return res;
};
