// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Note:

// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function evalRPN(tokens) {
  let stack = [];
  for (let elem of tokens) {
    if (elem === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (elem === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (elem === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (elem === "/") {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()));
    } else {
      stack.push(+elem);
    }
  }
  return stack[0];
}

// function evalRPN(tokens) {
//   if (tokens.length === 1) return tokens[0];
//   for (let i = 0; i < tokens.length; i++) {
//     let current;
//     if (tokens[i] === "+") {
//       current = +tokens[i - 2] + +tokens[i - 1];
//       tokens.splice(i - 2, 3, current);
//       return evalRPN(tokens);
//     } else if (tokens[i] === "-") {
//       current = +tokens[i - 2] - +tokens[i - 1];
//       tokens.splice(i - 2, 3, current);
//       return evalRPN(tokens);
//     } else if (tokens[i] === "*") {
//       current = +tokens[i - 2] * +tokens[i - 1];
//       tokens.splice(i - 2, 3, current);
//       return evalRPN(tokens);
//     } else if (tokens[i] === "/") {
//       current =
//         +tokens[i - 2] / +tokens[i - 1] >= 0
//           ? Math.floor(+tokens[i - 2] / +tokens[i - 1])
//           : Math.ceil(+tokens[i - 2] / +tokens[i - 1]);
//       tokens.splice(i - 2, 3, current);
//       return evalRPN(tokens);
//     }
//   }
// }
module.exports = evalRPN;
