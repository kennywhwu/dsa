const letterCombinations = require("./letter-combinations-phone");

describe("letterCombinations", () => {
  it("should return combination of letters that can be spelled with phone number digits", () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });
});
