const numUniqueEmails = emails => {
  const set = new Set();

  for (const email of emails) {
    set.add(getEmail(email));
  }

  return set.size;
};

const getEmail = email => {
  const [local, regin] = email.split('@');
  const noPoint = local.replace(/\./g, '');
  const noAdd = noPoint.split('+')[0];

  return `${noAdd}@${regin}`;
};
