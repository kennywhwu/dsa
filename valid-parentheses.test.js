const isValid = require("./valid-parentheses");

describe("isValid", () => {
  it("should return true if entered string contains valid parenthses pairs", () => {
    expect(isValid("()")).toEqual(true);
    expect(isValid("()[]{}")).toEqual(true);
    expect(isValid("(]")).toEqual(false);
    expect(isValid("([)]")).toEqual(false);
    expect(isValid("{[]}")).toEqual(true);
  });
});
