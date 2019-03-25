const convert = require("./zig-zag-conversion");

describe("convert", () => {
  it("should return zigzag sequence", () => {
    expect(convert("abc", 4)).toEqual("abc");
    expect(convert("abc", 1)).toEqual("abc");
    expect(convert("abc", 0)).toEqual("abc");
    expect(convert("abc", 3)).toEqual("abc");
    expect(convert("abc", 2)).toEqual("acb");
    expect(convert("", 2)).toEqual("");
    expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
    expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  });
});
