// Given board of 1's and 0's, return next stage of game of life

// A cell's neighbors make up the value of cells to it's eight adjacent cells (horizontal, vertical, diagonal)
// If a cell is alive, it will die if it has less than 2 or greater than 3 neighbors
// If a cell is dead, it will revive if it has exactly 3 neighbors

// https://leetcode.com/problems/game-of-life/

var gameOfLife = function(board) {
  function _checkNeighbor(y, x) {
    if (y >= board.length || y < 0 || x >= board[0].length || x < 0) {
      return 0;
    } else {
      return board[y][x];
    }
  }

  let changes = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let n =
        _checkNeighbor(row + 1, col + 1) +
        _checkNeighbor(row + 1, col) +
        _checkNeighbor(row + 1, col - 1) +
        _checkNeighbor(row, col + 1) +
        _checkNeighbor(row, col - 1) +
        _checkNeighbor(row - 1, col + 1) +
        _checkNeighbor(row - 1, col) +
        _checkNeighbor(row - 1, col - 1);
      if (board[row][col] === 0) {
        if (n === 3) changes.push([row, col, 1]);
      } else if (board[row][col] === 1) {
        if (n < 2 || n > 3) changes.push([row, col, 0]);
      }
    }
  }

  for (let change of changes) {
    let [row, col, val] = change;
    board[row][col] = val;
  }
  return board;
};

module.exports = gameOfLife;
