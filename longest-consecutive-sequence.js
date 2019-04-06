// Given unsorted array of integers, return length of longest consecutive subsequence in O(n) time

// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums) {
  let refObj = {};
  for (let num of nums) {
    if (refObj[num]) continue;
    let left = 0;
    let right = 0;
    if (refObj[num - 1]) {
      left = refObj[num - 1];
    }
    if (refObj[num + 1]) {
      right = refObj[num + 1];
    }
    let length = left + right + 1;
    refObj[num] = length;
    refObj[num - left] = length;
    refObj[num + right] = length;
  }
  let max = 0;
  for (let key in refObj) {
    max = Math.max(max, refObj[key]);
  }
  return max;
}

module.exports = longestConsecutive;
