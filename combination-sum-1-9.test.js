const combinationSum3 = require("./combination-sum-1-9");

describe("combinationSum3", () => {
  it("should return list of permutations that sum to target with k digits", () => {
    expect(combinationSum3(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
    expect(combinationSum3(4, 12)).toEqual([[1, 2, 3, 6], [1, 2, 4, 5]]);
    expect(combinationSum3(2, 12)).toEqual([[3, 9], [4, 8], [5, 7]]);
  });
});
