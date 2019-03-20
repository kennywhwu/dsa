const partition = require("./palindrome-partitioning");

describe("partition", () => {
  it("should return list of palindrome partitions of string", () => {
    expect(partition("aab")).toEqual([["a", "a", "b"], ["aa", "b"]]);
    expect(partition("aaa")).toEqual([
      ["a", "a", "a"],
      ["a", "aa"],
      ["aa", "a"],
      ["aaa"],
    ]);
    expect(partition("abacab")).toEqual([
      ["a", "b", "a", "c", "a", "b"],
      ["a", "b", "aca", "b"],
      ["a", "bacab"],
      ["aba", "c", "a", "b"],
    ]);
  });
});
