// Given lenth and width of grid, return number of unique paths to bottom right, assuming can only move right and down

// https://leetcode.com/problems/unique-paths

// function uniquePaths(m, n) {
//   let grid = Array(m).fill(Array(n).fill(1));
//   for (let row = 1; row < grid.length; row++) {
//     for (let col = 1; col < grid[0].length; col++) {
//       grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
//     }
//   }
//   return grid[m - 1][n - 1];
// }

// Reduce space complexity
var uniquePaths = function(m, n) {
  let grid = Array(m).fill(1);
  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      grid[col] += grid[col - 1];
    }
  }
  return grid[m - 1];
};

module.exports = uniquePaths;
