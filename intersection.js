// Given two arrays of integers, return list of distinct integers intersected between the two

// https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1, nums2) {
  let freq = {};
  let output = [];
  for (let num of nums1) {
    freq[num] = true;
  }

  for (let num of nums2) {
    if (freq[num]) {
      freq[num] = false;
      output.push(num);
    }
  }
  return output;
}

// Given two arrays of integers, return list of all integers intersected between the two (including duplicates)

// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersection2(nums1, nums2) {
  let freq = {};
  for (let num of nums1) {
    freq[num] = ++freq[num] || 1;
  }

  let output = [];
  for (let num of nums2) {
    if (freq[num]) {
      freq[num]--;
      output.push(num);
    }
  }

  return output;
}

module.exports = { intersection, intersection2 };
