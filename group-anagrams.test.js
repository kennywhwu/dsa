const groupAnagrams = require("./group-anagrams");

describe("groupAnagrams", () => {
  it("should return list of grouped anagrams", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });
});
