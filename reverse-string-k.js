// Given a string and k integer, return string with every k out of 2k characters reversed

// https://leetcode.com/problems/reverse-string-ii/

function reverseStr(s, k) {
  function _reverse(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  let outputStr = "";
  for (let i = 0; i < s.length; i += k) {
    if ((i / k) % 2 !== 0) {
      outputStr += s.substring(i, i + k);
    } else {
      outputStr += _reverse(s.substring(i, i + k));
    }
  }

  return outputStr;
}

module.exports = reverseStr;
