const intToRoman = require("./integer-to-roman");

describe("intToRoman", () => {
  it("should return roman numeral string when given integer", () => {
    expect(intToRoman(3)).toEqual("III");
    expect(intToRoman(4)).toEqual("IV");
    expect(intToRoman(9)).toEqual("IX");
    expect(intToRoman(58)).toEqual("LVIII");
    expect(intToRoman(1994)).toEqual("MCMXCIV");
  });
});
