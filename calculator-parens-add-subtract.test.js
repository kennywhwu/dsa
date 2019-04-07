const calculate = require("./calculator-parens-add-subtract");

describe("calculate", () => {
  it("should return caculated output of expression", () => {
    expect(calculate("1 + 1")).toEqual(2);
    expect(calculate(" 2-1 + 2 ")).toEqual(3);
    expect(calculate("(1+(4+5+2)-3)+(6+8)")).toEqual(23);
    expect(calculate("1-(5)+2")).toEqual(-2);
  });
});
