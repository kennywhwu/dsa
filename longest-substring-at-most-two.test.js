const longestSubstring = require("./longest-substring-at-most-two");

describe("longestSubstring", () => {
  it("should return length of longest substring containing at most two specified characters", () => {
    expect(longestSubstring("eceba")).toEqual(3);
    expect(longestSubstring("ccaabbb")).toEqual(5);
    expect(longestSubstring("abcba")).toEqual(3);
    expect(longestSubstring("aabbaaccbbcabc")).toEqual(6);
  });
});
