const maxProfit = require("./buy-sell-stock-ii");

describe("maxProfit", () => {
  it("should return maximum profit for buying and selling stock multiple times", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    expect(maxProfit([2, 4, 1])).toEqual(2);
  });
});
