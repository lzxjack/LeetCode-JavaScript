const checkIfInstanceOf = (obj, classFunction) => {
  if (!classFunction) return false;

  let p = obj?.__proto__;
  const displayPrototype = classFunction.prototype;
  while (p) {
    if (p === displayPrototype) {
      return true;
    }
    p = p.__proto__;
  }

  return false;
};
