// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//(https://leetcode.com/problems/valid-parentheses/)

function isValid(s) {
  let stack = [];
  for (let char of s) {
    if (char === "{") stack.push("}");
    if (char === "(") stack.push(")");
    if (char === "[") stack.push("]");
    if (char === "}" || char === ")" || char === "]") {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = isValid;
