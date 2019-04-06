const longestConsecutive = require("./longest-consecutive-sequence");

describe("longestConsecutive", () => {
  it("should return length of longest consecutive sequence", () => {
    expect(longestConsecutive([1, 1])).toEqual(1);
    expect(longestConsecutive([1])).toEqual(1);
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
    expect(longestConsecutive([1, 2, 0, 1])).toEqual(3);
    expect(longestConsecutive([1, 3, 2, 5, 6, 8, 7, 4])).toEqual(8);
    expect(longestConsecutive([1, 3, 2, 5, 6, 8, 7])).toEqual(4);
  });
});
