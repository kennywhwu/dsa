const maxArea = require("./container-with-most-water");

describe("maxArea", () => {
  it("should return maximum area contained by two sides of container", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
});
