const { knightTour, ratMaze, ratMazeJump, nQueens } = require('./backtracking');

describe('knightTour', () => {
  it('should not find solution on 3x3 board', () => {
    const moves = knightTour(3);

    expect(moves.length).toBe(0);
  });

  it('should find one solution to do knight tour on 5x5 board', () => {
    const moves = knightTour(5);

    expect(moves.length).toBe(25);

    expect(moves).toEqual([
      [0, 0],
      [1, 2],
      [2, 0],
      [0, 1],
      [1, 3],
      [3, 4],
      [2, 2],
      [4, 1],
      [3, 3],
      [1, 4],
      [0, 2],
      [1, 0],
      [3, 1],
      [4, 3],
      [2, 4],
      [0, 3],
      [1, 1],
      [3, 0],
      [4, 2],
      [2, 1],
      [4, 0],
      [3, 2],
      [4, 4],
      [2, 3],
      [0, 4],
    ]);
  });
});

describe('ratMaze', function() {
  it('should_return_successful_path_of_passed_in_maze', function() {
    let maze1 = [[1, 0, 0, 0], [1, 1, 0, 1], [0, 1, 0, 0], [1, 1, 1, 1]];
    expect(ratMaze(maze1)).toEqual([
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 1],
    ]);
    let maze2 = [
      [1, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1],
    ];
    expect(ratMaze(maze2)).toEqual([
      [1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 1],
    ]);
  });
});

describe('ratMazeJump', function() {
  it('should_return_successful_path_of_passed_in_maze_including_jumps', function() {
    let maze1 = [[2, 1, 0, 0], [3, 0, 0, 1], [0, 1, 0, 1], [0, 0, 0, 1]];
    expect(ratMazeJump(maze1)).toEqual([
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
    ]);
  });
});

describe('nQueens', function() {
  it('should_return_matrix_of_queen_positions_so_they_do_not_attack_each_other', function() {
    expect(nQueens(4)).toEqual([
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
    ]);
  });
});
