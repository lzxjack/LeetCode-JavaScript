const flipAndInvertImage = image => {
    const len = image.length;
    const lenI = image[0].length;
    for (let i = 0; i < len; i++) {
        image[i].reverse();
        for (let j = 0; j < lenI; j++) {
            image[i][j] = 1 - image[i][j];
        }
    }
    return image;
};
