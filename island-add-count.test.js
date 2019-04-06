const numIslands2 = require("./island-add-count");

describe("numIslands2", () => {
  it("should return number of islands after each step", () => {
    expect(numIslands2(8, 4, [[0, 0], [7, 1], [6, 1], [3, 3], [4, 1]])).toEqual(
      [1, 2, 2, 3, 4]
    );
    expect(numIslands2(3, 3, [[0, 0], [1, 1], [0, 1], [0, 2]])).toEqual([
      1,
      2,
      1,
      1,
    ]);
    expect(numIslands2(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]])).toEqual([
      1,
      1,
      2,
      3,
    ]);
  });
});
