const divide = require("./divide-two-integers");

describe("divide", () => {
  it("should return quotient after dividing dividend by divisor", () => {
    expect(divide(10, 3)).toEqual(3);
    expect(divide(7, -3)).toEqual(-2);
  });
});
