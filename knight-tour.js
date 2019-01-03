function knightTour(num) {
  let board = Array(num)
    .fill()
    .map(() => Array(num).fill(0));

  const moveset = [
    [-1, -2],
    [-2, -1],
    [+1, -2],
    [+2, -1],
    [-2, +1],
    [-1, +2],
    [+1, +2],
    [+2, +1],
  ];

  let path = [[0, 0]];
  board[0][0] = 1;

  const target = num ** 2;

  function _traverseBoard(cell) {
    if (path.length === target) return true;
    for (let i = 0; i < moveset.length; i++) {
      if (
        cell[0] + moveset[i][0] >= 0 &&
        cell[0] + moveset[i][0] < num &&
        cell[1] + moveset[i][1] >= 0 &&
        cell[1] + moveset[i][1] < num &&
        board[cell[0] + moveset[i][0]][cell[1] + moveset[i][1]] === 0
      ) {
        path.push([cell[0] + moveset[i][0], cell[1] + moveset[i][1]]);
        board[cell[0] + moveset[i][0]][cell[1] + moveset[i][1]] = 1;
        if (_traverseBoard([cell[0] + moveset[i][0], cell[1] + moveset[i][1]]))
          return path;
        path.pop();
        board[cell[0] + moveset[i][0]][cell[1] + moveset[i][1]] = 0;
      }
    }
  }

  return _traverseBoard([0, 0]);
}

module.exports = knightTour;
