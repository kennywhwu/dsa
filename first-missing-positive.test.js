const firstMissingPositive = require("./first-missing-positive");

describe("firstMissingPositive", () => {
  it("should return first missing positive integer from list of integers", () => {
    expect(firstMissingPositive([1, 2, 0])).toEqual(3);
    expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2);
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1);
  });
});
