const spiralOrder = require("./spiral-matrix");

describe("spiralOrder", () => {
  it("should return list of values in spiral order of input matrix", () => {
    expect(
      spiralOrder([
        [1, 2, 3, 16],
        [4, 5, 6, 17],
        [7, 8, 9, 18],
        [10, 11, 12, 19],
        [13, 14, 15, 20],
      ])
    ).toEqual([
      1,
      2,
      3,
      16,
      17,
      18,
      19,
      20,
      15,
      14,
      13,
      10,
      7,
      4,
      5,
      6,
      9,
      12,
      11,
      8,
    ]);
    expect(
      spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]])
    ).toEqual([1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11]);
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([
      1,
      2,
      3,
      4,
      8,
      12,
      11,
      10,
      9,
      5,
      6,
      7,
    ]);
    expect(spiralOrder([[]])).toEqual([]);
    expect(spiralOrder([])).toEqual([]);
  });
});
