const { insert, extractMax } = require("./heap");

describe("maxHeap", () => {
  it("should implement all functionality of max heaps", () => {
    let arr = [25, 10, 20, 5, 4, 19, 7];
    expect(insert(arr, 22)).toEqual([25, 22, 20, 10, 4, 19, 7, 5]);
    expect(extractMax(arr)).toEqual(25);
    expect(arr).toEqual([22, 10, 20, 5, 4, 19, 7]);
  });
});
