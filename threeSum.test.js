const threeSum = require("./threeSum");

describe("threeSum", () => {
  it("should return list of all sets of 3 numbers that sum to 0", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, 0, 1], [-1, -1, 2]]);
  });
});
