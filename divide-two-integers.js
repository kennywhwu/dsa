//Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
//Return the quotient after dividing dividend by divisor.
//(https://leetcode.com/problems/divide-two-integers/)

function divide(dividend, divisor) {
  let sign = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    sign = -1;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (divisor === 1)
    return sign === 1
      ? Math.min(dividend, Math.pow(2, 31) - 1)
      : Math.max(-dividend, -Math.pow(2, 31));

  let counter = 0;
  while (dividend >= divisor) {
    counter++;
    dividend -= divisor;
  }

  return sign === 1
    ? Math.min(counter, Math.pow(2, 31) - 1)
    : Math.max(-counter, -Math.pow(2, 31));
}

module.exports = divide;
