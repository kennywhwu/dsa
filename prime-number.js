// Given a number, return true if prime

function isPrime(n) {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Given a number, return array of prime factorization

function primeFactors(n) {
  let factors = [];
  while (n >= 2 && n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 2) factors.push(n);

  return factors;
}

function sumPrime(n) {
  let ref = [];
  for (let i = 2; i < n - 1; i++) {
    if (isPrime(i) === true && isPrime(n - i)) {
      return true;
    }
  }
  return false;
}

module.exports = { isPrime, primeFactors, sumPrime };
