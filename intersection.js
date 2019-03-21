function intersection(nums1, nums2) {
  // [4, 2, 3, 6]
  // [1, 7, 9, 4, 2]

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

module.exports = intersection;
