// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining (https://leetcode.com/problems/trapping-rain-water/)

// https://leetcode.com/problems/trapping-rain-water/

function trap(height) {
  let sum = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        sum += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        sum += rightMax - height[right];
      }
      right--;
    }
  }
  return sum;

  // let sum = 0;
  // for (let i = 0; i < height.length; i++) {
  //   if (height[i] === 0) continue;
  //   let max = 0;
  //   for (let j = i + 1; j < height.length; j++) {
  //     if (height[j] >= height[i]) {
  //       sum += (j - i - 1) * (height[i] - max);
  //       break;
  //     } else {
  //       max = Math.max(max, height[j]);
  //     }
  //   }
  //   max = 0;
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (height[j] > height[i]) {
  //       sum += (i - j - 1) * (height[i] - max);
  //       break;
  //     } else if (height[j] === height[i]) {
  //       break;
  //     } else {
  //       max = Math.max(max, height[j]);
  //     }
  //   }
  // }
  // return sum;
}

module.exports = trap;
