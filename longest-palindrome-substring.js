// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// https://leetcode.com/problems/longest-palindromic-substring/

// var longestPalindrome = function(s) {
//   let maxPalindrome = "";
//   for (let i = 0; i < s.length; i++) {
//     let start = i;
//     let end = s.length - 1;
//     while (start <= end && s.length - i > maxPalindrome.length) {
//       if ((start === end || start === end - 1) && s[start] === s[end]) {
//         let tempPalindrome = s.substring(i, start + end - i + 1);
//         if (tempPalindrome.length >= maxPalindrome.length) {
//           maxPalindrome = tempPalindrome;
//         }
//       }
//       if (s[start] !== s[end]) {
//         start = i;
//       } else {
//         start++;
//       }
//       end--;
//     }
//   }
//   return maxPalindrome;
// };

function longestPalindrome(s) {
  function findPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  let maxPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    let tempPalindrome = findPalindrome(s, i, i);
    if (tempPalindrome.length >= maxPalindrome.length)
      maxPalindrome = tempPalindrome;
  }
  for (let i = 0; i < s.length; i++) {
    let tempPalindrome = findPalindrome(s, i, i + 1);
    if (tempPalindrome.length >= maxPalindrome.length)
      maxPalindrome = tempPalindrome;
  }
  return maxPalindrome;
}

module.exports = longestPalindrome;
