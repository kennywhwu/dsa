const trap = require("./trapping-rain-water");

describe("trap", () => {
  it("should return area of rain trapped in terrain", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });
});
