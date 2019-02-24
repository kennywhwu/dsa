// Given an input string, reverse the string word by word.

// https://leetcode.com/problems/reverse-words-in-a-string/

var reverseWords = function(str) {
  let strArray = str.split(" ");
  let outputStr = "";
  let reverseArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if (
      strArray[strArray.length - 1 - i] !== " " &&
      strArray[strArray.length - 1 - i] !== ""
    ) {
      reverseArray.push(strArray[strArray.length - 1 - i]);
    }
  }
  return reverseArray.join(" ");
};

module.exports = reverseWords;
