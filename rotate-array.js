// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
  k %= nums.length;
  function reverseArray(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);

  return nums;
};

module.exports = rotate;
