const allPathsSourceTarget = require("./graph-paths-to-target");

describe("allPathsSourceTarget", () => {
  it("should return all paths from source to target", () => {
    expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
    expect(allPathsSourceTarget([[1, 2], [2, 3], [3], []])).toEqual([
      [0, 1, 2, 3],
      [0, 1, 3],
      [0, 2, 3],
    ]);
  });
});
