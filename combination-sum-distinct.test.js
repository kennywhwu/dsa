const combinationSum = require("./combination-sum-distinct");

describe("combinationSum", () => {
  it("should return list of permutations that sum to target", () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });
});
