const evalRPN = require("./reverse-polish-notation");

describe("evalRPN", () => {
  it("should return evaluated total", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toEqual(9);
    expect(evalRPN(["4", "13", "5", "/", "+"])).toEqual(6);
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ])
    ).toEqual(22);
  });
});
