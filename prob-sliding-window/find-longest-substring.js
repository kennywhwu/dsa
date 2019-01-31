// add whatever parameters you deem necessary
function findLongestSubstring(str) {
  let start = 0,
    maxLength = 0,
    seen = {};

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return maxLength;
}
// // add whatever parameters you deem necessary
// function findLongestSubstring(str) {
//   if (str.length <= 1) return str.length;
//   let start = 0,
//     end = 0,
//     maxLength,
//     freq = {};

//   while (end < str.length) {
//     if (freq[str[end]]) {
//       freq[str[start]]--;
//       start++;
//     } else {
//       if (maxLength === undefined) maxLength = end - start + 1;
//       maxLength = Math.max(maxLength, end - start + 1);
//       freq[str[end]] = 1;
//       end++;
//     }
//   }
//   return maxLength;
// }

module.exports = findLongestSubstring;
