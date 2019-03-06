// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// https://leetcode.com/problems/palindromic-substrings/submissions/

var countSubstrings = function(s) {
  function isPalindrome(str, start, end) {
    if (end - start <= 0) return true;
    if (str[start] === str[end]) {
      return isPalindrome(str, ++start, --end);
    } else {
      return false;
    }
  }

  let start = 0,
    end = 0,
    counter = 0;
  while (start < s.length) {
    while (end < s.length) {
      if (s[start] === s[end]) {
        if (isPalindrome(s, start, end)) {
          counter++;
        }
      }
      end++;
    }
    start++;
    end = start;
  }
  return counter;
};

module.exports = countSubstrings;
