// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
  let outputArray = [1];
  for (let i = 1; i < nums.length; i++) {
    outputArray[i] = outputArray[i - 1] * nums[i - 1];
  }
  let factor = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    outputArray[i] *= factor;
    factor *= nums[i];
  }
  return outputArray;
};

module.exports = productExceptSelf;
