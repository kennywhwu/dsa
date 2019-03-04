// Given integer, return array of valid parentheses strings made up of integer number of pairs

// https://leetcode.com/problems/generate-parentheses/

function generateParentheses(n) {
  let open = n,
    closed = n,
    currentStr = "",
    outputArray = [];

  function _generate(open, closed, currentStr, outputArray) {
    if (open === 0 && closed === 0) outputArray.push(currentStr);
    if (open > 0) {
      _generate(open - 1, closed, currentStr + "(", outputArray);
    }
    if (closed > open) {
      _generate(open, closed - 1, currentStr + ")", outputArray);
    }
  }

  _generate(open, closed, currentStr, outputArray);
  return outputArray;
}
// function generateParentheses(n) {
//   let open = n,
//     closed = n,
//     currentArray = [],
//     outputArray = [];

//   function _generate(open, closed, currentArray, outputArray) {
//     if (open === 0 && closed === 0) outputArray.push(currentArray.join(""));
//     if (open > 0) {
//       currentArray.push("(");
//       open--;
//       _generate(open, closed, currentArray, outputArray);
//       open++;
//       currentArray.pop();
//     }
//     if (closed > 0 && closed > open) {
//       currentArray.push(")");
//       closed--;
//       _generate(open, closed, currentArray, outputArray);
//       closed++;
//       currentArray.pop();
//     }
//   }

//   _generate(open, closed, currentArray, outputArray);
//   return outputArray;
// }

module.exports = generateParentheses;
