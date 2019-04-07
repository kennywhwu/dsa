// Given math expression with addition, subtraction, multiplication, and division, return calculated total

// https://leetcode.com/problems/basic-calculator-ii/

function calculate(s) {
  let digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  let stack = [];
  let operator = "+";
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (digits.has(s[i])) {
      cur = cur * 10 + +s[i];
    }
    if ((!digits.has(s[i]) && s[i] !== " ") || i === s.length - 1) {
      if (operator === "+") {
        stack.push(cur);
      } else if (operator === "-") {
        stack.push(-cur);
      } else if (operator === "*") {
        stack.push(stack.pop() * cur);
      } else if (operator === "/") {
        let num = stack.pop();
        let subtotal;
        if (num / cur < 0) {
          subtotal = Math.ceil(num / cur);
        } else {
          subtotal = Math.floor(num / cur);
        }
        stack.push(subtotal);
      }
      operator = s[i];
      cur = 0;
    }
  }
  while (stack.length > 1) {
    stack.push(stack.pop() + stack.pop());
  }
  return stack[0];
}

module.exports = calculate;
