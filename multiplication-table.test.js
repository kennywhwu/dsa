const multiTable = require("./multiplication-table");

describe("multiTable", () => {
  it("should return 2D-array of multiplication table with n numbers", () => {
    expect(multiTable(2)).toEqual([[1, 2], [2, 4]]);
    expect(multiTable(3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    expect(multiTable(4)).toEqual([
      [1, 2, 3, 4],
      [2, 4, 6, 8],
      [3, 6, 9, 12],
      [4, 8, 12, 16],
    ]);
  });
});
