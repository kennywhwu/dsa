const wiggleSort = require("./wiggle-sort-duplicates");

describe("wiggleSort", () => {
  it("should return array of integers in alternating order", () => {
    expect(wiggleSort([1, 5, 1, 1, 1, 6, 4])).toEqual([1, 6, 1, 5, 1, 4, 1]);
    expect(wiggleSort([1, 3, 2, 2, 3, 1])).toEqual([2, 3, 1, 3, 1, 2]);
    expect(wiggleSort([2, 1, 1, 1, 2])).toEqual([1, 2, 1, 2, 1]);
    expect(wiggleSort([4, 5, 5, 6])).toEqual([5, 6, 4, 5]);
  });
});
