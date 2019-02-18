//  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  if (nums.length <= 1) return null;
  let diffObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (diffObj[nums[i]] !== undefined) return [diffObj[nums[i]], i];
    else {
      diffObj[target - nums[i]] = i;
    }
  }
  return null;
}

module.exports = twoSum;
