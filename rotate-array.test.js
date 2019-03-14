const rotate = require("./rotate-array");

describe("rotate", () => {
  it("should mutate passed in array to rotate numbers to right k times", () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate([1], 3)).toEqual([1]);
    expect(rotate([1, 2], 3)).toEqual([2, 1]);
  });
});
