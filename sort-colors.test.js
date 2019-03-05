const sortColors = require("./sort-colors");

describe("sortColors", () => {
  it("should return array of sorted elements", () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
    expect(sortColors([2, 0, 1])).toEqual([0, 1, 2]);
    expect(sortColors([1, 2, 0])).toEqual([0, 1, 2]);
  });
});
