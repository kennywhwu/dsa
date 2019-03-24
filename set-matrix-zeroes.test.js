const setZeroes = require("./set-matrix-zeroes");

describe("setZeroes", () => {
  it("should return input matrix with all columns and rows that contain a zero set to all zeroes", () => {
    expect(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
    expect(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
    expect(setZeroes([[0, 1]])).toEqual([[0, 0]]);
  });
});
