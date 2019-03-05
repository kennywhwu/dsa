const minWindow = require("./minimum-window-substring");

describe("minWindow", () => {
  it("should return string with minimum size that contains all characters", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC");
    expect(minWindow("ADOBECODEBANC", "ABBC")).toEqual("BECODEBA");
    expect(minWindow("AABBCC", "ABC")).toEqual("ABBC");
    expect(minWindow("AABBCC", "ABCD")).toEqual("");
    expect(minWindow("AAAAAABAAAAAC", "AAABC")).toEqual("BAAAAAC");
    expect(minWindow("ADDDDDBDCA", "ABC")).toEqual("BDCA");
  });
});
