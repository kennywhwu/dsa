const longestPalindrome = require("./longest-palindrome-substring");

describe("longestPalindrome", () => {
  it("should return longest palindrome substring", () => {
    expect(longestPalindrome("babad")).toEqual("aba");
    expect(longestPalindrome("cbbd")).toEqual("bb");
    expect(longestPalindrome("abacab")).toEqual("bacab");
    expect(longestPalindrome("")).toEqual("");
    expect(longestPalindrome("a")).toEqual("a");
    expect(longestPalindrome("acbabcdabc")).toEqual("cbabc");
    expect(longestPalindrome("aaabaaaa")).toEqual("aaabaaa");
  });
});
