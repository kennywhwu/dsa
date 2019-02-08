// /Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero (https://leetcode.com/problems/3sum/).

function threeSum(nums) {
  let output = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let diff = 0 - nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[start] + nums[end];
      if (sum === diff) {
        output.push([nums[i], nums[start], nums[end]]);
        while (start < end && nums[start] === nums[start + 1]) start++;
        while (start < end && nums[end] === nums[end - 1]) end--;
        start++;
        end--;
      } else if (sum > diff) {
        end--;
      } else if (sum < diff) {
        start++;
      }
    }
  }
  return output;
}

module.exports = threeSum;
