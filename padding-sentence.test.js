const padNumber = require("./padding-sentence");

describe("padNumber", () => {
  it("should return string with equal padding between words to equal passed in number of characters", () => {
    expect(padNumber(50, "hello world, what a lovely day it is.")).toEqual(
      "hello   world,   what   a   lovely   day   it  is."
    );
    expect(padNumber(1, "a")).toEqual("a");
    expect(padNumber(3, "a b")).toEqual("a b");
    expect(padNumber(4, "a b")).toEqual("a  b");
    expect(padNumber(10, "a b c")).toEqual("a    b   c");
  });
});
