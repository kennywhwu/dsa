// Given 2D matrix, return array of entries listed in spiral order counter-clockwise

// https://leetcode.com/problems/spiral-matrix

function spiralOrder(matrix) {
  let output = [];
  if (matrix.length === 0 || matrix[0].length === 0) return output;
  let rows = matrix.length;
  let cols = matrix[0].length;

  if (rows === 1) {
    for (let i = 0; i < cols; i++) {
      output.push(matrix[0][i]);
    }
    return output;
  } else if (cols === 1) {
    for (let i = 0; i < rows; i++) {
      output.push(matrix[i][0]);
    }
    return output;
  }

  let layers = Math.min(Math.floor(rows / 2), Math.floor(cols / 2));

  for (let i = 0; i < layers; i++) {
    for (let j = i; j < cols - i - 1; j++) {
      output.push(matrix[i][j]);
    }
    for (let k = i; k < rows - i - 1; k++) {
      output.push(matrix[k][cols - i - 1]);
    }
    for (let j = cols - i - 1; j > i; j--) {
      output.push(matrix[rows - i - 1][j]);
    }
    for (let k = rows - i - 1; k > i; k--) {
      output.push(matrix[k][i]);
    }
  }

  if (cols % 2 !== 0 && rows >= cols) {
    for (let i = Math.floor(cols / 2); i < rows - Math.floor(cols / 2); i++) {
      output.push(matrix[i][Math.floor(cols / 2)]);
    }
  } else if (rows % 2 !== 0 && cols > rows) {
    for (let i = Math.floor(rows / 2); i < cols - Math.floor(rows / 2); i++) {
      output.push(matrix[Math.floor(rows / 2)][i]);
    }
  }

  return output;
}

module.exports = spiralOrder;
