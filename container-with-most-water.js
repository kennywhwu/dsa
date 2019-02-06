// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water (https://leetcode.com/problems/container-with-most-water/).

function maxArea(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, Math.abs((j - i) * Math.min(height[i], height[j])));
    }
  }
  return max;
}

module.exports = maxArea;
