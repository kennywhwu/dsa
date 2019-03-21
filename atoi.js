// Given a string, return 0 if first non-white space/+/- character is not a number, else return integer of first continuous set of integers (including option +/- sign, max and min of [-2^31 − 1,2^31 − 1])

// https://leetcode.com/problems/string-to-integer-atoi/

function atoi(str) {
  let digits = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
  };

  let idx = 0;
  while (str[idx] === " ") {
    idx++;
  }

  let output = "";
  if (str[idx] === "+" || str[idx] === "-") {
    output += str[idx];
    idx++;
  } else if (!digits[str[idx]]) {
    return 0;
  }

  while (digits[str[idx]]) {
    output += str[idx];
    idx++;
  }
  if (output.length === 0 || output === "-" || output === "+") return 0;
  return Math.min(2147483647, Math.max(-2147483648, +output));
}

module.exports = atoi;
