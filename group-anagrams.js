// Given list of words, return array of grouped anagrams

// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs) {
  let refObj = {};
  let output = [];

  for (let str of strs) {
    let word = str;
    let sortedStr = str
      .split("")
      .sort()
      .join("");
    if (refObj[sortedStr]) {
      refObj[sortedStr].push(word);
    } else {
      refObj[sortedStr] = [word];
    }
  }

  for (let key in refObj) {
    output.push(refObj[key]);
  }
  return output;
}

module.exports = groupAnagrams;
