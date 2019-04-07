const calculate = require("./calculator-add-subtract-multi-divide");

describe("calculate", () => {
  it("should return calculated total", () => {
    expect(calculate("14-3/2")).toEqual(13);
    expect(calculate("3+2*2")).toEqual(7);
    expect(calculate(" 3/2 ")).toEqual(1);
    expect(calculate(" 3+5 / 2 ")).toEqual(5);
    expect(calculate("10/5*3/2")).toEqual(3);
  });
});
