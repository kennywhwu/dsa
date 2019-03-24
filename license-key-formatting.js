// Given a string of letters and numbers and integer K, return a string where each set of K uppercase characters are separated by '-', with exception of first set can be smaller

// https://leetcode.com/problems/license-key-formatting/

function licenseKeyFormatting(S, K) {
  let editedStr = S.split("-")
    .join("")
    .toUpperCase();
  let output = "";
  for (let i = editedStr.length - 1; i >= 0; i--) {
    output = editedStr[i] + output;
    if ((editedStr.length - i) % K === 0 && i > 0) {
      output = "-" + output;
    }
  }

  return output;
}

module.exports = licenseKeyFormatting;
