// Given 2D binary array, return the maximum area of contiguous rectangle

// https://leetcode.com/problems/maximal-rectangle

function maximalRectangle(matrix) {
  let max = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "1") {
        let y = row;
        let x = col;
        let side = 0;

        while (y < matrix.length && matrix[y][col] === "1") {
          x = col;
          let area = 0;
          side++;
          y++;
          while (x < matrix[0].length) {
            let rect = true;
            for (let i = row; i < y; i++) {
              if (matrix[i][x] === "0") {
                rect = false;
                break;
              }
            }
            if (rect) {
              area += side;
              x++;
            } else {
              break;
            }
          }
          max = Math.max(max, area);
        }
      }
    }
  }
  return max;
}

module.exports = maximalRectangle;
