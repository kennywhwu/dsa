const permutations = require("./permutations-string");

describe("permutations", () => {
  it("should return list of permutations of string", () => {
    expect(permutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
    expect(permutations("aba")).toEqual(["aba", "aab", "baa"]);
  });
});
