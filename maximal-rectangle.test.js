const maximalRectangle = require("./maximal-rectangle");

describe("maximalRectangle", () => {
  it("should return maximum area of contiguous rectangle", () => {
    expect(maximalRectangle([["1", "1", "1"], ["1", "1", "0"]])).toEqual(4);
    expect(
      maximalRectangle([["1", "1", "1"], ["1", "0", "0"], ["1", "0", "0"]])
    ).toEqual(3);
    expect(
      maximalRectangle([
        ["1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "0"],
        ["1", "1", "1", "1", "1", "1", "1", "0"],
        ["1", "1", "1", "1", "1", "0", "0", "0"],
        ["0", "1", "1", "1", "1", "0", "0", "0"],
      ])
    ).toEqual(21);
    expect(
      maximalRectangle([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ])
    ).toEqual(6);
  });
});
