// Given 2D matrix, change every row and column that contains a zero to all zeroes

// https://leetcode.com/problems/set-matrix-zeroes

function setZeroes(matrix) {
  let zeroes = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) zeroes.push([row, col]);
    }
  }

  function _setZeroes(y, x, board) {
    for (let row = 0; row < board.length; row++) {
      board[row][x] = 0;
    }
    for (let col = 0; col < board[0].length; col++) {
      board[y][col] = 0;
    }
  }

  for (let coord of zeroes) {
    let [y, x] = coord;
    _setZeroes(y, x, matrix);
  }
  return matrix;
}

module.exports = setZeroes;
