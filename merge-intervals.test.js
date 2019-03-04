const merge = require("./merge-intervals");

describe("merge", () => {
  it("should return list of merged intervals", () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
    expect(merge([[8, 10], [1, 3], [15, 18], [2, 6]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
    expect(merge([[]])).toEqual([[]]);
    expect(merge([])).toEqual([[]]);
  });
});
