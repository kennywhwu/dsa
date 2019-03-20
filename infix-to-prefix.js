// Given infix string, convert into prefix

function infixToPrefix(s) {
  let output = "";
  let stack = [];
  let operators = ["^", "*", "/", "+", "-"];

  for (let i = s.length - 1; i >= 0; i--) {
    if (operators.includes(s[i])) {
      if (stack.length === 0) {
        stack.push(s[i]);
      } else {
        if (_priority(s[i]) < _priority(stack[stack.length - 1])) {
          output += stack.pop();
        }
        stack.push(s[i]);
      }
    } else if (s[i] === ")") {
      stack.push(s[i]);
    } else if (s[i] === "(") {
      while (stack[stack.length - 1] !== ")") {
        output += stack.pop();
      }
      stack.pop();
    } else {
      output += s[i];
    }
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output
    .split("")
    .reverse()
    .join("");

  function _priority(operator) {
    let rank = 0;
    if (operator === "^") {
      rank = 3;
    } else if (operator === "*" || operator === "/") {
      rank = 2;
    } else if (operator === "+" || operator === "-") {
      rank = 1;
    }
    return rank;
  }
}

module.exports = infixToPrefix;
