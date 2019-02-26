// Return minimum number of swaps necessary to bring unordered consecutive integers starting at 1 to ascending order

const minSwaps = require("./minimum-swaps");

describe("minSwaps", () => {
  it("should return minimum number of swaps to set array in ascending order", () => {
    expect(minSwaps([4, 3, 1, 2])).toEqual(3);
    expect(minSwaps([2, 3, 4, 1, 5])).toEqual(3);
    expect(minSwaps([1, 3, 5, 2, 4, 6, 7])).toEqual(3);
  });
});
