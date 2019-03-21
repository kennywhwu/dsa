const { intersection, intersection2 } = require("./intersection");

describe("intersection", () => {
  it("should return list of unique common integers between two arrays", () => {
    expect(intersection([4, 2, 3, 6], [1, 7, 9, 4, 2])).toEqual([4, 2]);
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
describe("intersection2", () => {
  it("should return list of all common integers between two arrays", () => {
    expect(intersection2([4, 2, 3, 6], [1, 7, 9, 4, 2])).toEqual([4, 2]);
    expect(intersection2([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersection2([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
