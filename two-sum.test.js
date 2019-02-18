const twoSum = require("./two-sum");

describe("twoSum", () => {
  it("should return list of indices for two numbers in array that sum up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([0, 1, 2, 3], 2)).toEqual([0, 2]);
    expect(twoSum([0, 1, 3, 4], 2)).toEqual(null);
    expect(twoSum([], 9)).toEqual(null);
  });
});
