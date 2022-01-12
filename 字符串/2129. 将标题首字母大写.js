const capitalizeTitle = function (title) {
    const arr = title.split(' ');
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i].length > 2) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join(' ');
};
