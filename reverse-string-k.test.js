const reverseString = require("./reverse-string-k");

describe("reverseString", () => {
  it("should return string with every k of 2k characters reversed", () => {
    expect(reverseString("abcdefg", 2)).toEqual("bacdfeg");
  });
});
