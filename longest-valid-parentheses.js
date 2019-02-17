// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
// (https://leetcode.com/problems/longest-valid-parentheses/)

function longestValidParentheses(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (s[stack[stack.length - 1]] === "(") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  stack.push(s.length);
  let max = stack[0] + 1;
  for (let i = 0; i < stack.length - 1; i++) {
    max = Math.max(stack[i + 1] - stack[i], max);
  }

  return max - 1;
}

module.exports = longestValidParentheses;
