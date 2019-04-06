const largestRectangleArea = require("./largest-rectangle-area");

describe("largestRectangleArea", () => {
  it("should return largest area of contiguous rectangle", () => {
    expect(largestRectangleArea([1])).toEqual(1);
    expect(largestRectangleArea([])).toEqual(0);
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toEqual(10);
    expect(largestRectangleArea([1, 2, 3, 4, 5, 6])).toEqual(12);
    expect(largestRectangleArea([5, 4, 3, 2, 1])).toEqual(9);
    expect(largestRectangleArea([5, 1, 2, 5, 4, 5, 1, 6])).toEqual(12);
  });
});
