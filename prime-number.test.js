const { isPrime, primeFactors } = require("./prime-number");

describe("isPrime", () => {
  it("should return true if number is prime", () => {
    expect(isPrime(0)).toEqual(false);
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(6)).toEqual(false);
    expect(isPrime(9)).toEqual(false);
    expect(isPrime(109)).toEqual(true);
    expect(isPrime(121)).toEqual(false);
  });
});
describe("primeFactors", () => {
  it("should return list of prime factors for number", () => {
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(3)).toEqual([3]);
    expect(primeFactors(4)).toEqual([2, 2]);
    expect(primeFactors(6)).toEqual([2, 3]);
    expect(primeFactors(9)).toEqual([3, 3]);
    expect(primeFactors(12)).toEqual([2, 2, 3]);
  });
});
