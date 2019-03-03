const romanToInt = require("./roman-to-integer");

describe("romanToInt", () => {
  it("should return integer value when given roman numeral string", () => {
    expect(romanToInt("III")).toEqual(3);
    expect(romanToInt("IV")).toEqual(4);
    expect(romanToInt("IX")).toEqual(9);
    expect(romanToInt("LVIII")).toEqual(58);
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});
