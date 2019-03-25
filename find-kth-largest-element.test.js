const findKthLargest = require("./find-kth-largest-element");

describe("findKthLargest", () => {
  it("should return kth largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
    expect(findKthLargest([0, 1, 2, 1, 0], 2)).toEqual(1);
    expect(findKthLargest([0, 1, 2, 2], 2)).toEqual(2);
    expect(findKthLargest([-1, 2, 0], 2)).toEqual(0);
  });
});
