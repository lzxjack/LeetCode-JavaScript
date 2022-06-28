const randomString = () => Math.random().toString(36).substring(7).split('').join('.');

const BASE = 'http://tinyurl.com';

const map = new Map();

const encode = longUrl => {
  const str = randomString();
  map.set(str, longUrl);
  return `${BASE}/${str}`;
};

const decode = shortUrl => {
  const index = shortUrl.lastIndexOf('/') + 1;
  const str = shortUrl.slice(index);
  return map.get(str);
};
