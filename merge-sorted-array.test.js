const merge = require("./merge-sorted-arrays");

describe("merge", () => {
  it("should merge second array into first", () => {
    expect(merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)).toEqual([
      1,
      2,
      2,
      3,
      5,
      6,
    ]);
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
      1,
      2,
      2,
      3,
      5,
      6,
    ]);
  });
});
