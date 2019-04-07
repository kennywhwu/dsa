// Given a math expression with parentheses, addition, and subtraction, calculate the expression

// https://leetcode.com/problems/basic-calculator

function calculate(s) {
  if (s.length === 0) return 0;

  let stack = [];
  let sign = 1;
  let current = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      continue;
    } else if (s[i] === "+") {
      sum += current * sign;
      sign = 1;
      current = 0;
    } else if (s[i] === "-") {
      sum += current * sign;
      sign = -1;
      current = 0;
    } else if (s[i] === "(") {
      stack.push(sum);
      stack.push(sign);
      sign = 1;
      sum = 0;
    } else if (s[i] === ")") {
      sum += sign * current;
      sign = stack.pop();
      current = stack.pop();
      sum = sum * sign + current;
      current = 0;
    } else {
      current *= 10;
      current += +s[i];
    }
  }
  return sum + current * sign;
}

module.exports = calculate;
