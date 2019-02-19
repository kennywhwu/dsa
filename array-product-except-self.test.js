const productExceptSelf = require("./array-product-except-self");

describe("productExceptSelf", () => {
  it("should return output array with product of all elements except number at current position", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
