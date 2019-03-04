const generateParentheses = require("./generate-parentheses");

describe("generateParentheses", () => {
  it("should return list of all string combinations of valid parentheses", () => {
    expect(generateParentheses(1)).toEqual(["()"]);
    expect(generateParentheses(2)).toEqual(["(())", "()()"]);
    expect(generateParentheses(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });
});
