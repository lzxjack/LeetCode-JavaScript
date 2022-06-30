const MOD = 1000000007;
const numPrimeArrangements = n => {
  let numPrimes = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      numPrimes++;
    }
  }
  let res = 1;
  let m = n - numPrimes;
  while (numPrimes > 0) {
    res = res % MOD;
    res *= numPrimes;
    numPrimes--;
  }
  while (m > 0) {
    res = res % MOD;
    res *= m;
    m--;
  }
  return res;
};

const isPrime = n => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
