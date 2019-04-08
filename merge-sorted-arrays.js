// Given two sorted arrays, first with expanded space, merger second into first as sorted

// https://leetcode.com/problems/merge-sorted-array

function merge(nums1, m, nums2, n) {
  let p1End = nums1.length - 1;
  let p1 = m - 1;
  let p2 = nums2.length - 1;

  while (p2 >= 0) {
    if (p1 < 0 || nums2[p2] >= nums1[p1]) {
      nums1[p1End] = nums2[p2];
      p2--;
    } else if (nums2[p2] < nums1[p1]) {
      [nums1[p1], nums1[p1End]] = [nums1[p1End], nums1[p1]];
      p1--;
    }
    p1End--;
  }
  return nums1;
}

module.exports = merge;
