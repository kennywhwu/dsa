// Given list of heights, return the maximum area of contiguous rectangle

// https://leetcode.com/problems/largest-rectangle-in-histogram

function largestRectangleArea(heights) {
  if (heights.length === 0) return 0;
  let left = [];
  let right = [];
  left[0] = -1;
  right[heights.length - 1] = heights.length;

  for (let i = 1; i < heights.length; i++) {
    let point = i - 1;
    while (point >= 0 && heights[point] >= heights[i]) {
      point = left[point];
    }
    left[i] = point;
  }
  for (let i = heights.length - 2; i >= 0; i--) {
    let point = i + 1;
    while (point >= 0 && heights[point] >= heights[i]) {
      point = right[point];
    }
    right[i] = point;
  }
  let max = 0;
  for (let i = 0; i < left.length; i++) {
    let area = heights[i] * (right[i] - left[i] - 1);
    max = Math.max(max, area);
  }

  return max;
}
module.exports = largestRectangleArea;
