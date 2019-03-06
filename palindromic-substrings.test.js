const countSubstrings = require("./palindromic-substrings");

describe("countSubstrings", () => {
  it("should return number of palindromes within string", () => {
    expect(countSubstrings("abc")).toEqual(3);
    expect(countSubstrings("aaa")).toEqual(6);
    expect(countSubstrings("xkjkqlajprjwefilxgpdpebieswu")).toEqual(30);
  });
});
