const validIPAddress = queryIP => {
  if (queryIP.indexOf('.') !== -1) {
    const arr = queryIP.split('.');
    if (arr.length !== 4) return 'Neither';
    for (const item of arr) {
      if (
        !/^[0-9]+$/.test(item) ||
        Number(item) > 255 ||
        (item[0] === '0' && item.length > 1)
      ) {
        return 'Neither';
      }
    }
    return 'IPv4';
  } else if (queryIP.indexOf(':') !== -1) {
    const arr = queryIP.split(':');
    if (arr.length !== 8) return 'Neither';
    for (const item of arr) {
      if (item.length < 1 || item.length > 4 || !/^[a-fA-F0-9]+$/.test(item)) {
        return 'Neither';
      }
    }
    return 'IPv6';
  }

  return 'Neither';
};
