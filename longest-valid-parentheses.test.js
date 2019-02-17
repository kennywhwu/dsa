const longestValidParentheses = require("./longest-valid-parentheses");

describe("longestValidParentheses", () => {
  it("should return the length of the longest valid parentheses substring", () => {
    expect(longestValidParentheses("(()")).toEqual(2);
    expect(longestValidParentheses(")()())")).toEqual(4);
  });
});
