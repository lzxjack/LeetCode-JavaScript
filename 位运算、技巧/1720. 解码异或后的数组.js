const decode = (encoded, first) => {
    const res = [first];
    const len = encoded.length;
    for (let i = 0; i < len; i++) {
        res.push(res[i] ^ encoded[i]);
    }
    return res;
};

// a^b^b=a
