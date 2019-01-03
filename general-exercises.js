// Returns string printed from left to right in zigzag form depending on passed-in num number of rows (from LeetCode)
function convertZigzag(str, num) {
  let output = '';
  // initialize arrays
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
  }
  // set reverse condition
  let reverse = false;
  // loop through each letter; if not reverse, push linearly into corresponding array; otherwise push into reverse order
  for (let i = 0; i < str.length; i++) {
    if (!reverse) {
      arr[i % ((num - 1) * 2)].push(str[i]);
      if ((i + 1) % (num - 1) === 0) reverse = true;
    } else {
      arr[num - 1 - (i % (num - 1))].push(str[i]);
      if ((i + 1) % (num - 1) === 0) reverse = false;
    }
  }

  // concatenate string with characters in arrays in order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      output += arr[i][j];
    }
  }
  return output;
}

// Return array of all possible valid parentheses given n number of pairs (solution found on Leetcod)
function generateParenthesis(n) {
  let res = [];
  generate(n, n, '', res);
  return res;
}

function generate(l, r, s, res) {
  // l: left remaining, r: right remaining
  if (l > r) return; // e.g. ))(

  if (!l && !r) return res.push(s);

  if (l) generate(l - 1, r, s + '(', res);
  if (r) generate(l, r - 1, s + ')', res);
}

// Return maximum substring length with valid parentheses (from Leetcode)
function longestValidParentheses(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else {
      if (str[stack[stack.length - 1]] === '(') {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  stack.push(str.length);
  let max = stack[0] + 1;
  for (let i = 0; i < stack.length - 1; i++) {
    max = Math.max(stack[i + 1] - stack[i], max);
  }

  return max - 1;
}

function reverseWords(str) {
  return str
    .split(' ')
    .filter(word => word)
    .reverse()
    .join(' ');
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = {
  convertZigzag,
  generateParenthesis,
  longestValidParentheses,
  reverseWords,
  isPrime,
};
