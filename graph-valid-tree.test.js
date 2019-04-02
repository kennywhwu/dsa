const validTree = require("./graph-valid-tree");

describe("validTree", () => {
  it("should return true if graph is a tree", () => {
    expect(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])).toEqual(
      false
    );
    expect(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])).toEqual(true);
    expect(validTree(2, [[0, 1]])).toEqual(true);
    expect(validTree(2, [[1, 0]])).toEqual(true);
  });
});
