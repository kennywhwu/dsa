const strStr = require("./index-of");

describe("strStr", () => {
  it("should return index of first instance of second string appearing in first string", () => {
    expect(strStr("hello",'ll')).toEqual(2);
    expect(strStr("aaaa",'bba')).toEqual(-1);
    expect(strStr("a",'a')).toEqual(0);
    expect(strStr("aaa",'')).toEqual(0);
    expect(strStr("a",'b')).toEqual(-1);
  });
});
