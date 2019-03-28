// Given string and list of words, return true if string can be made up of combinaton of words

// https://leetcode.com/problems/word-break

function wordBreak(s, wordDict) {
  let ref = [true];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ref[j] && wordDict.includes(s.substring(j, i))) {
        ref[i] = true;
        break;
      } else {
        ref[i] = false;
      }
    }
  }

  return ref[s.length];
}

module.exports = wordBreak;
