const permute = require("./permutation-numbers-distinct");

describe("permute", () => {
  it("should return list of all unique permutations", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
    expect(permute([4, 1, 3])).toEqual([
      [4, 1, 3],
      [4, 3, 1],
      [1, 4, 3],
      [1, 3, 4],
      [3, 4, 1],
      [3, 1, 4],
    ]);
  });
});
