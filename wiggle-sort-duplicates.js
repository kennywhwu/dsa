// Given array of integers including duplicates, arrange in place to be in alternating order

// https://leetcode.com/problems/wiggle-sort-ii/

function wiggleSort(nums) {
  nums.sort((a, b) => a - b);
  let ref = [...nums];
  let j = nums.length - 1;
  for (let i = 1; i < nums.length; i += 2, j--) {
    nums[i] = ref[j];
  }
  for (let i = 0; i < nums.length; i += 2, j--) {
    nums[i] = ref[j];
  }

  return nums;
}

module.exports = wiggleSort;
