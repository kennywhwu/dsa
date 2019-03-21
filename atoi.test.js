const atoi = require("./atoi");

describe("atoi", () => {
  it("should return integer of converted string, or 0 if no conversion", () => {
    expect(atoi("42")).toEqual(42);
    expect(atoi("     -42")).toEqual(-42);
    expect(atoi("4193 with words")).toEqual(4193);
    expect(atoi("words and 987")).toEqual(0);
    expect(atoi("-91283472332")).toEqual(-2147483648);
  });
});
