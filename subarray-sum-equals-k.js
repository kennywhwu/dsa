// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function(nums, k) {
  let sum = 0;
  let count = 0;
  let runningCount = { 0: 1 };
  for (num of nums) {
    sum += num;
    if (runningCount[sum - k]) {
      count += runningCount[sum - k];
    }
    runningCount[sum] = (runningCount[sum] ? runningCount[sum] : 0) + 1;
  }
  return count;
};

module.exports = subarraySum;
