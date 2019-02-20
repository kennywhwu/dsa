const subarraySum = require("./subarray-sum-equals-k");

describe("subarraySum", () => {
  it("should return number of contiguous subarrays that sum up to target", () => {
    expect(subarraySum([1, 1, 1], 2)).toEqual(2);
    expect(subarraySum([0, 1, 2], 3)).toEqual(2);
    expect(subarraySum([1, 2, 1, 2], 3)).toEqual(3);
    expect(subarraySum([1, 1, 1, 3], 3)).toEqual(2);
    expect(subarraySum([-1, 1, 2], 2)).toEqual(2);
    expect(subarraySum([-1, 1, -2, 2, -3, 3], 0)).toEqual(6);
    expect(subarraySum([2, 2, 2, 1, 3], 3)).toEqual(2);
  });
});
