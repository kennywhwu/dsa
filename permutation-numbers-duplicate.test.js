const permutateUnique = require("./permutation-numbers-duplicate");

describe("permutateUnique", () => {
  it("should return list of all unique permutations", () => {
    expect(permutateUnique([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
    expect(permutateUnique([1, 1, 1])).toEqual([[1, 1, 1]]);
    expect(permutateUnique([2, 1, 2, 2])).toEqual([
      [1, 2, 2, 2],
      [2, 1, 2, 2],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
    ]);
  });
});
