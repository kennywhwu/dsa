const gameOfLife = require("./game-of-life");

describe("gameOfLife", () => {
  it("should return next stage of game of life", () => {
    let board1 = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
    let board2 = [[1, 1, 0], [1, 1, 1], [0, 1, 0]];
    let board3 = [
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
    ];
    let board4 = [[1], [0], [0], [1], [0], [0], [1], [0], [0], [1]];
    expect(gameOfLife(board1)).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]);
    expect(gameOfLife(board2)).toEqual([[1, 0, 1], [0, 0, 1], [1, 1, 1]]);
    expect(gameOfLife(board3)).toEqual([
      [1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ]);
    expect(gameOfLife(board4)).toEqual([
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
    ]);
  });
});
