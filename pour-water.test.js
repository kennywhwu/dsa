const pourWater = require("./pour-water");

describe("pourWater", () => {
  it("should return new height", () => {
    expect(pourWater([1, 1, 1], 2, 1)).toEqual([2, 2, 1]);
    expect(pourWater([5, 4, 3, 2, 1], 2, 1)).toEqual([5, 4, 3, 3, 2]);
    expect(pourWater([1, 0, 1], 1, 0)).toEqual([1, 1, 1]);
    expect(pourWater([1, 2, 3, 4], 2, 2)).toEqual([2, 3, 3, 4]);
    expect(pourWater([3, 1, 3], 5, 1)).toEqual([4, 4, 4]);
    expect(pourWater([2, 1, 1, 2, 1, 2, 2], 4, 3)).toEqual([
      2,
      2,
      2,
      3,
      2,
      2,
      2,
    ]);
  });
});
