const reverseVowels = require("./reverse-vowels");

describe("reverseVowels", () => {
  it("should return string with vowels reversed", () => {
    expect(reverseVowels("hello")).toEqual("holle");
    expect(reverseVowels("leetcode")).toEqual("leotcede");
    expect(reverseVowels("abeiouude")).toEqual("ebuuoieda");
  });
});
