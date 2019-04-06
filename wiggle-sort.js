// Given array of unsorted integers, swap in place so integers will alternate higher and lower

// https://leetcode.com/problems/wiggle-sort

function wiggleSort(nums) {
  if (nums.length <= 1) return nums;

  function _swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      if (nums[i] > nums[i + 1]) {
        _swap(nums, i, i + 1);
      }
    } else if (i % 2 !== 0) {
      if (nums[i] < nums[i + 1]) {
        _swap(nums, i, i + 1);
      }
    }
  }
  return nums;
}

module.exports = wiggleSort;
