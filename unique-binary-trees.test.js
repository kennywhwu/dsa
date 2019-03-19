const numTrees = require("./unique-binary-trees");

describe("numTrees", () => {
  it("should return number of structurally unique binary trees", () => {
    expect(numTrees(0)).toEqual(1);
    expect(numTrees(1)).toEqual(1);
    expect(numTrees(2)).toEqual(2);
    expect(numTrees(3)).toEqual(5);
    expect(numTrees(4)).toEqual(14);
    expect(numTrees(5)).toEqual(42);
    expect(numTrees(6)).toEqual(132);
  });
});
