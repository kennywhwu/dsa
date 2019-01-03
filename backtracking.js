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
    for (let i = 1; i <= maze[cell[0]][cell[1]]; i++) {
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

module.exports = { knightTour, ratMaze, ratMazeJump };
