const decodeString = require("./decode-string");

describe("decodeString", () => {
  it("should return decoded string", () => {
    expect(decodeString("3[a]2[bc]")).toEqual("aaabcbc");
    expect(decodeString("3[a2[c]]")).toEqual("accaccacc");
    expect(decodeString("2[abc]3[cd]ef")).toEqual("abcabccdcdcdef");
    expect(decodeString("3[a2[2[c]]]")).toEqual("accccaccccacccc");
  });
});
