const infixToPrefix = require("./infix-to-prefix");

describe("infixToPrefix", () => {
  it("should return prefix string", () => {
    expect(infixToPrefix("a*b+c/d")).toEqual("+*ab/cd");
    expect(infixToPrefix("(a-b/c)*(a/k-l)")).toEqual("*-a/bc-/akl");
    expect(infixToPrefix("(a+b^c)*d+e^5")).toEqual("+*+a^bcd^e5");
  });
});
