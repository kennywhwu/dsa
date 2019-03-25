// Given a string, return the zigzag sequence

// https://leetcode.com/problems/zigzag-conversion/

function convert(s, numRows) {
  if (s.length <= 2 || numRows <= 1 || numRows >= s.length) return s;
  let indexRef = {};
  for (let i = 0; i < s.length; i++) {
    let idx = i % (numRows - 1);
    if (Math.floor(i / (numRows - 1)) % 2 === 0) {
      if (indexRef[idx]) {
        indexRef[idx] += s[i];
      } else {
        indexRef[idx] = s[i];
      }
    } else {
      if (indexRef[numRows - idx - 1]) {
        indexRef[numRows - idx - 1] += s[i];
      } else {
        indexRef[numRows - idx - 1] = s[i];
      }
    }
  }
  let output = "";
  for (let i = 0; i < numRows; i++) {
    output += indexRef[i];
  }
  return output;
}

module.exports = convert;
