// Given encoded string, return decoded

// https://leetcode.com/problems/decode-string/

function decodeString(s) {
  let digits = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let stack = [];
  let output = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let current = "";
      while (stack[stack.length - 1] !== "[") {
        let char = stack.pop();
        current = char + current;
      }
      stack.pop();
      let factor = 0;
      let counter = 0;
      while (digits.has(+stack[stack.length - 1]) && stack.length > 0) {
        let num = stack.pop();
        factor = factor + Math.pow(10, counter) * +num;
        counter++;
      }

      let multiple = "";
      for (let i = 0; i < factor; i++) {
        multiple += current;
      }
      stack.push(multiple);
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

module.exports = decodeString;
