const wiggleSort = require("./wiggle-sort");

describe("wiggleSort", () => {
  it("should swap in place array for alternating higher and lower integers", () => {
    expect(wiggleSort([1, 2, 2, 3, 1, 2])).toEqual([1, 2, 2, 3, 1, 2]);
    expect(wiggleSort([5, 4, 3, 1, 2])).toEqual([4, 5, 1, 3, 2]);
    expect(wiggleSort([1, 2, 3, 4, 5])).toEqual([1, 3, 2, 5, 4]);
    expect(wiggleSort([5, 4, 7, 1, 2, 3])).toEqual([4, 7, 1, 5, 2, 3]);
  });
});
