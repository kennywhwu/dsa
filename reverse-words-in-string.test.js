const reverseWords = require("./reverse-words-in-string");

describe("reverseWords", () => {
  it("should return string reversed word by word", () => {
    expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
  });
});
