// Given array, sort in place so objects of same value are adjacent

// https://leetcode.com/problems/sort-colors/

// O(n) time complexity, O(1) space complexity
function sortColors(nums) {
  let j = 0;
  let k = nums.length - 1;
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    } else if (nums[i] === 2) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      i--;
      k--;
    }
  }
  return nums;
}

// // O(2n) time complexity; O(n) space complexity
// function sortColors(nums) {
//   let freq = {};
//   for (let num of nums) {
//     freq[num] = ++freq[num] || 1;
//   }
//   let color = 0;
//   let i = 0;
//   while (color < Object.keys(freq).length) {
//     if (freq[color] > 0) {
//       nums[i] = color;
//       freq[color]--;
//       i++;
//     } else {
//       color++;
//     }
//   }
//   return nums;
// }

module.exports = sortColors;
