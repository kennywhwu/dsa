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

  return _traverseBoard([0, 0]) ? path : [];
}

// Return path through maze from top left to bottom right corner using backtracking
function ratMaze(maze) {
  let path = Array(maze.length)
    .fill()
    .map(() => Array(maze[0].length).fill(0));

  path[0][0] = 1;

  function _traverseMaze(cell) {
    path[cell[0]][cell[1]] = 1;
    if (cell[0] === maze.length - 1 && cell[1] === maze[0].length - 1)
      return true;
    if (cell[1] + 1 < maze[0].length && maze[cell[0]][cell[1] + 1] === 1) {
      path[cell[0]][cell[1] + 1] = 1;
      if (_traverseMaze([cell[0], cell[1] + 1])) return path;
      path[cell[0]][cell[1] + 1] = 0;
    }
    if (cell[0] + 1 < maze.length && maze[cell[0] + 1][cell[1]] === 1) {
      path[cell[0] + 1][cell[1]] = 1;
      if (_traverseMaze([cell[0] + 1, cell[1]])) return path;
      path[cell[0] + 1][cell[1]] = 0;
    }
  }

  return _traverseMaze([0, 0]);
}

// Return path through maze with jumps using backtracking
function ratMazeJump(maze) {
  let path = Array(maze.length)
    .fill()
    .map(() => Array(maze[0].length).fill(0));

  path[0][0] = 1;

  function _traverseMaze(cell) {
    path[cell[0]][cell[1]] = 1;
    if (cell[0] === maze.length - 1 && cell[1] === maze[0].length - 1)
      return true;
    for (let i = maze[cell[0]][cell[1]]; i > 0; i--) {
      if (cell[1] + i < maze[0].length && maze[cell[0]][cell[1] + i] > 0) {
        path[cell[0]][cell[1] + i] = 1;
        if (_traverseMaze([cell[0], cell[1] + i])) return path;
        path[cell[0]][cell[1] + i] = 0;
      }
      if (cell[0] + i < maze.length && maze[cell[0] + i][cell[1]] > 0) {
        path[cell[0] + i][cell[1]] = 1;
        if (_traverseMaze([cell[0] + i, cell[1]])) return path;
        path[cell[0] + i][cell[1]] = 0;
      }
    }
  }

  return _traverseMaze([0, 0]) ? path : [];
}

function nQueens(num) {
  let board = Array(num)
    .fill()
    .map(() => Array(num).fill(0));

  function _markSquares(cell, mark) {
    //horizontal
    for (let i = 0; i < board[cell[0]].length; i++) {
      board[cell[0]][i] = mark;
    }
    //vertical
    for (let i = 0; i < board.length; i++) {
      board[i][cell[1]] = mark;
    }
    //diagonals
    let y = cell[0];
    let x = cell[1];
    let yChange = 1;
    let xChange = 1;
    let counter = 0;
    while (
      (x - xChange >= 0 && y - yChange >= 0) ||
      (x - xChange >= 0 && y + yChange < board.length) ||
      (x + xChange < board[0].length && y + yChange < board.length) ||
      (x + xChange < board[0].length && y - yChange >= 0)
    ) {
      if (y + yChange < board.length && x + xChange < board[0].length) {
        board[y + yChange][x + xChange] = mark;
      }
      if (y + yChange < board.length && x - xChange >= 0) {
        board[y + yChange][x - xChange] = mark;
      }
      if (y - yChange >= 0 && x + xChange < board[0].length) {
        board[y - yChange][x + xChange] = mark;
      }
      if (y - yChange >= 0 && x - xChange >= 0) {
        board[y - yChange][x - xChange] = mark;
      }
      xChange++;
      yChange++;
    }
    board[cell[0]][cell[1]] = mark === 1 ? 2 : 0;
  }

  let counter = 0;

  function _placeQueen(cell) {
    if (counter === num) return true;
    let next = [cell[0], cell[1] + 1];
    while (next[1] >= board[0].length || board[next[0]][next[1]] !== 0) {
      if (next[1] >= board[0].length) {
        next = [next[0] + 1, 0];
      }
      if (board[next[0]][next[1]] !== 0) {
        next = [next[0], next[1] + 1];
      }
    }
    _markSquares(next, 1);
    if (_placeQueen(next)) return true;
    _markSquares(next, 0);
  }

  _placeQueen([0, 0]);
  return board.map(e1 =>
    e1.map(e2 => {
      if (e2 === 2) {
        return 1;
      } else {
        return 0;
      }
    })
  );
}

module.exports = { knightTour, ratMaze, ratMazeJump, nQueens };
