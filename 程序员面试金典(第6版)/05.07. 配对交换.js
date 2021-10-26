const exchangeBits = num => {
    const odd = 0x55555555;
    const even = 0xaaaaaaaa;
    return ((num & even) >> 1) | ((num & odd) << 1);
};
