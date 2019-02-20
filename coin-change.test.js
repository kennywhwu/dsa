const coinChange = require("./coin-change");

describe("coinChange", () => {
  it("should return fewest number of coins to sum up to target", () => {
    expect(coinChange([1, 2, 5], 11)).toEqual(3);
    expect(coinChange([2], 3)).toEqual(-1);
    expect(coinChange([4, 5], 13)).toEqual(3);
  });
});
