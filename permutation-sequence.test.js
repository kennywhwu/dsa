const getPermutation = require("./permutation-sequence");

describe("getPermutation", () => {
  it("should return string of kth permutation", () => {
    expect(getPermutation(3, 3)).toEqual("213");
    expect(getPermutation(4, 3)).toEqual("1324");
    expect(getPermutation(4, 9)).toEqual("2314");
    expect(getPermutation(5, 25)).toEqual("21345");
  });
});
