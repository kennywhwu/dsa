const carry = require("./carrying-boxes");

describe("carry", () => {
  it("should return string of order of boxes to move", () => {
    expect(carry(100, 100)).toEqual("100");
    expect(carry(4, 3)).toEqual("2,2");
    expect(carry(5, 3)).toEqual("3,2");
    expect(carry(12, 5)).toEqual("4,4,4");
    expect(carry(3, 4)).toEqual("3");
  });
});
