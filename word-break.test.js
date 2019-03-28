const wordBreak = require("./word-break");

describe("wordBreak", () => {
  it("should return true if string can be made up of combination of words", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toEqual(true);
    expect(wordBreak("applepenapple", ["apple", "pen"])).toEqual(true);
    expect(
      wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
    ).toEqual(false);
  });
});
